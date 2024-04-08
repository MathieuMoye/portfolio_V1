import Header from '../components/layout/Header.jsx';
import '../assets/styles/skills.css'
import { skills } from '../assets/json/skills';

const Skills = () =>{
    return (
        <>
            <Header />
            <div className='skills-container'>
                <h2 className='skills-title'>Skills</h2>
                <ul className='skills-list-container'>
                    {
                        skills.map((skill) => {
                            return (
                             <li className='skills-list'>{skill.name}<img className='skills-img' src={skill.img}></img></li>   
                            )
                            
                        })
                    }
                </ul>
            </div>
        </>
            
    )
}

export default Skills; 