import React, { useState, useEffect} from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

function Skills(){


    const currentSlide = () => {

    }

    return (
        <div id="skills" className="skills">
            <h1>My <span style={{color: "#ff521d"}}>Skills</span></h1>

            <div className="skills-container">

                <div className="skill-n skill1">
                    <div className="icon">
                        <img src="../code-html.svg" alt="" />                                 
                    </div>    
                    <h2>Web Development</h2>
                    <p>
                        Proficient in HTML, CSS, Bootstrap, Tailwind CSS,
                        JavaScript, React JS, Node Js, C#, MySQL, and MSSQL. 
                        Able to develop fast, interactive, and user-friendly website.
                    </p> 
                </div>   

                <div className="skill-n skill2">
                    <div className="icon">
                        <img src="../code-curly.svg" alt="" />                                              
                    </div>  
                    <h2>Software Development</h2>
                    <p>
                        Proficient in Java, Swagger UI, MySQL, MSSQL,
                        Maven as a build tool, and Spring Boot. Able to develop
                        reliable and good softwares.
                    </p>  
                </div>               

            </div>

        </div>
    )
}

export default Skills;