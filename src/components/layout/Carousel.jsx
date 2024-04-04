/* eslint-disable react/jsx-key */
import '../../assets/styles/carousel.css';


const Carousel = ({ skills }) => {
    return (
        <div className='carousel-container'>
           <div className='carousel'>
            {
                skills.map((skill) => {
                    return (
                <div >  
                    <img  className='carousel-logo' key={skill.name} src={skill.img} alt={skill.name}/>
                </div>  
                    )
                 
                })
            }
                
                
            
           </div>
        </div>
    )
}

export default Carousel; 