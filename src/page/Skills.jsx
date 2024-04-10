import Header from '../components/layout/Header.jsx';
import '../assets/styles/skills.css'
import { skills } from '../assets/json/skills';

const Skills = () =>{
    return (
        <>
            <Header />
            <div className='skills-container'>
                <h2 className='skills-title'>Skills</h2>
                <h3 className='skills-subtitle'>front-end</h3>
                <ul className='skills-list-container'>
                    {
                        skills.map((skill) => {
                            return (
                             <li className='skills-list'><p className='skills-name'>{skill.name}</p><img className='skills-img' src={skill.img}></img></li>   
                            )
                            
                        })
                    }
                </ul>
                <h3 className='skills-subtitle'>back-end</h3>
            </div>
        </>
            
    )
}

export default Skills; 