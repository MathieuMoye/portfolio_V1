
import Header from "../components/layout/Header";
import githubLogo from '../img/github_logo.png';
import linkedinLogo from '../img/linkedin_logo.jpg';
import mailLogo from '../img/mail_logo.png';

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className="flex flex-col self-center w-1200 mx-36 tracking-widest ">
              <h1 className="text-6xl font-bold">Mathieu Moye,</h1>
              <p className="pr-72">Après une carrière dans la restauration
                 et dans les médias, j’ai décidé de me
                 consacrer à ma passion pour le web.
                 Développeur fullstack de 28 ans et amoureux du frontend, je suis
                 convaincu que le développement est la
                 voie qui me permettra d’allier créativité,
                 technologie et impact positif.
                 Parlons-en ensemble ?
              </p>
             <div className="flex flex-row">
                <a href='https://github.com/MathieuMoye'><img className='w-8 h-8' src={githubLogo} /></a>
                <a href='https://www.linkedin.com/in/mathieumoye/'><img className='w-8 h-8'src={linkedinLogo} /></a>
                <a href='mailto:moye.mathieu@gmail.com'><img className='w-6 h-6 mt-1 ml-1' src={mailLogo} /></a>
             </div>
            </div>
            
        </div>
    );
}

export default Home;