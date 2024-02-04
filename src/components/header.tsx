const Header = () => {
    return (
        <header className="w-full bg-transparent text-white h-16 fixed top-0">
            <div className="flex items-center justify-around h-full">
                <div className="">
                    <a className="text-4xl">Siddhant</a>
                </div>

                <div className="h-full">
                    <button type="button" className="hidden" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className=""></span>
                    </button>

                    <nav id="navbar" className="flex justify-center h-full">
                        <ul className="flex items-center justify-center space-x-6 text-base">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;