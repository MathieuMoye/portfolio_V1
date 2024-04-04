import Header from '../components/layout/Header.jsx';
import '../assets/styles/cv.css'
import CV from '../img/CV_MATHIEU_MOYE.pdf'

const Curriculum = () => {
    return (
        <>
            <Header />
            <div className='cv-container'>
                <h2 className='cv-title'>CV</h2>
                <button>
                    <a className='cv-link' href={CV} download={'CV_Mathieu_Moye'}>Télécharger mon CV</a>
                </button> 
            </div>
        </>
        
    )
}

export default Curriculum;