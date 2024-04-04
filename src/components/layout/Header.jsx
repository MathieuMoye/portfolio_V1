import '../../assets/styles/header.css';
import sunLogo from '../../img/sun-icon.png';

const Header = () => {
    return (
    <div className='header-container'>
        <a href='/' className="header-title hover:bg-gray-200">Mathieu Moye</a>
        <div className=" header-nav">
            <nav>
                <ul className=" header-list">
                    <a className="header-link hover:bg-gray-200" href="/skills"><li>Skills</li></a>
                    <a className="header-link hover:bg-gray-200" href="/projets"><li>Projets</li></a>
                    <a className="header-link hover:bg-gray-200" href="/formations"><li>Formations</li></a>
                    <a className="header-link hover:bg-gray-200" href="CV"><li>Curriculum vitæ</li></a>
                </ul>
            </nav>
        </div>
        <div className='header-div-logo'>
            <button><img className=' header-sun hover:bg-gray-200' src={sunLogo} alt='Sun Logo'/></button>
        </div>
    </div>  
    );
};

export default Header;
