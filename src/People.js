import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
const People = ({people,value,prevSlide,nextSlide}) => {
    return <div className="section-center">
        {
            people.map((peo,index)=>{
                const {id,image,name,title,quote}=peo;
                let position='nextSlide';
                if(index===value)
                position='activeSlide';
                if(index===value-1 || (index===0 && index===people.length-1))
                position='lastSlide'
                return <article key={id} className={position}>
                        <img src={image} alt={name} className="person-image" />
                        <h4>{name}</h4>
                        <p className="article-title">{title}</p>
                        <p className="text">{quote}</p>
                        </article>
                    })
                }
        <button className="btn prev" onClick={prevSlide}><BsChevronLeft /></button>
        <button className= "btn next" onClick={nextSlide}><BsChevronRight /></button>
    </div>
}
export default People;