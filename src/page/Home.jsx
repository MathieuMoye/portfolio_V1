import Header from "../components/layout/Header";
import Carousel from "../components/layout/Carousel";
import githubLogo from '../img/github_logo.png';
import linkedinLogo from '../img/linkedin_logo.jpg';
import mailLogo from '../img/mail_logo.png';
import '../assets/styles/home.css';
import { skills } from '../assets/json/skills'

const Home = () => {
    return (
        <>
        <Header />
            <div className="home-container">
                <div className="home-centered">
                    <h1 className="home-title">Mathieu Moye,</h1>
                    <p className="home-desc">Après une carrière dans la restauration
                    et dans les médias, j’ai décidé de me
                    consacrer à ma passion pour le web.
                    Développeur fullstack de 28 ans et amoureux du frontend, je suis
                    convaincu que le développement est la
                    voie qui me permettra d’allier créativité,
                    technologie et impact positif.
                    Parlons-en ensemble ?
                    </p>
                    <div className="home-div-logo">
                        <a href='https://github.com/MathieuMoye'><img className='home-logo' src={githubLogo} /></a>
                        <a href='https://www.linkedin.com/in/mathieumoye/'><img className=' home-logo'src={linkedinLogo} /></a>
                        <a href='mailto:moye.mathieu@gmail.com'><img className='mail-logo' src={mailLogo} /></a>
                    </div>
                    <Carousel skills={skills}/>
                </div>
              
            </div>
        </>
    );
}

export default Home;