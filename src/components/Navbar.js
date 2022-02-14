import React, { useState, useEffect } from 'react';

function Navbar(){

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground)
    })


    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <a href="#home" className="logo-atag">
                <img src="../logo.svg" alt="logo" />
            </a>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* htmlFor looks for an ID of a html tag not class */}
            <label htmlFor="nav-toggle" className="nav-toggle-label">                
                <span></span>                               
            </label>
        </header>
    )
}

export default Navbar;