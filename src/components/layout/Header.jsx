import sunLogo from '../../img/sun-icon.png';

const Header = () => {
    return (
    <div className='flex tracking-widest justify-around sticky top-0 z-10 px-2.5 border-b h-12'>
        <a href='#' className=" hover:bg-gray-200 w-auto flex flex-row items-center cursor-pointer text-base font-semibold px-4">Mathieu Moye</a>
        <div className="flex flex-row justify-center items-center text-sm">
            <nav>
                <ul className=" w-auto flex flex-row m-auto justify-center self-center">
                    <a className="hover:bg-gray-200 px-7 text-base" href="#"><li>Skills</li></a>
                    <a className="hover:bg-gray-200 px-7 text-base" href="#"><li>Projets</li></a>
                    <a className="hover:bg-gray-200 px-7 text-base" href="#"><li>Formations</li></a>
                    <a className="hover:bg-gray-200 px-7 text-base" href="#"><li>Curriculum vitæ</li></a>
                </ul>
            </nav>
        </div>
        <div className='flex items-center'>
            <button><img className='w-6 h-6 hover:bg-gray-200' src={sunLogo} alt='Sun Logo'/></button>
        </div>
    </div>  
    )
}

export default Header;
