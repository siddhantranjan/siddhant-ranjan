'use client';

import { useEffect, useState } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (scrollY > 200) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e: any) => {
          e.preventDefault();
          const targetId = e.target.getAttribute('href');
          const targetElement = document.querySelector(targetId);
         
          window.scrollTo({
            top: targetElement.offsetTop - 70, 
            behavior: 'smooth'
          });
    
        }
        const anchors = document.querySelectorAll('a');
        anchors.forEach(a => a.addEventListener('click', handleClick));
        return () => anchors.forEach(a => a.removeEventListener('click', handleClick));
    
      });
    return (
        <header className="w-full bg-transparent text-white h-16 fixed top-0">
            <div className={`main_header flex items-center justify-around h-full ${isSticky ? "sticky_menu" : ""}`}>
                <div className="">
                    <a className="text-4xl font-extrabold tracking-wider text-tertiary">Siddhant</a>
                </div>

                <div className="hidden md:block h-full">
                    <nav id="navbar" className="flex justify-center h-full">
                        <ul className="flex items-center justify-center space-x-6 text-base">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;