import React from 'react';
import Typewriter from 'typewriter-effect';

function Home(){    
    return (
        <div id="home" className="home">            
            <div className='home-info'>
                <h1 className='typewriter'>
                    I'm&nbsp;
                    <Typewriter                        
                        options={{
                            strings: [' Koketjo Sethobja', ' a Software Developer', ' a Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                     />
                </h1>
                
                <p>
                    I'm a Web Developer, and Software Developer from South Africa.
                    I enjoy developing websites and softwares to help businesses and
                    individuals do better online.
                </p>
                <a href="">
                    Download <span style={{color: "#ff521d"}}>CV</span>
                </a>              
            </div>

            <div className='first-image-div'>
                <div className="second-image-div">
                    <img src="../me.jpg" alt="photo of me" />
                </div>
            </div>
        </div>
    )
}

export default Home;