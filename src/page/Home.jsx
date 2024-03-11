import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import githubLogo from '../img/github_logo.png';
import linkedinLogo from '../img/linkedin_logo.jpg';
import mailLogo from '../img/mail_logo.png';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <div>
              <h1>Mathieu Moye,</h1>
              <p>Après une carrière dans la restauration
                et dans les médias, j’ai décidé de me
                consacrer à ma passion pour le web.
                Développeur fullstack de 28 ans et amoureux du frontend, je suis
                convaincu que le développement est la
                voie qui me permettra d’allier créativité,
                technologie et impact positif.
                Parlons-en ensemble ?
             </p>
             <img src={githubLogo} />
             <img src={linkedinLogo} />
             <img src={mailLogo} />
            <Footer />  
            </div>
            
        </div>
    );
}

export default Home;