import React, { useEffect, useState } from 'react';
import data from './data';
import People from './People';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  const { id} = people[value];
  
  const checkIndex=(index)=>{
    if(index>people.length-1)
    return 0
    if(index<0)
    return people.length-1
    return index;
  }

  const nextSlide=()=>{
    setValue((prev)=>{
      let newInd=prev+1;
      return checkIndex(newInd);
    })
  }

  const prevSlide=()=>{
    setValue((prev)=>{
      let newInd=prev-1;
      return checkIndex(newInd);
    });
  }
  

  useEffect(()=>{
   let slider= setInterval(()=>{
      setValue(checkIndex(value+1))
    },3000);
    return ()=>clearInterval(slider)
  },[value]);

  return <main>
    <section className="section">
      <div className="title">
        <h2><span>/ </span>reviews</h2>
      </div>
        <People key={id} people={people} prevSlide={prevSlide} nextSlide={nextSlide} value={value}/>
    </section>
  </main>
}

export default App;
