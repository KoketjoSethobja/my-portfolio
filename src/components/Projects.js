import React from 'react';

function Projects(){
    return (
        <div id="projects" className="projects">

            <h1>My <span style={{color: "#ff521d"}}>Projects</span></h1>

            <div className="projects-container">

                <div className="project-n project1">
                    <div className="preview">
                        <img src="../image-gallery.png" alt="imagegallery pic" />                                 
                    </div>    
                    <h2>Image Gallery</h2>
                    <p>
                        A website where users can sign up upload, view, edit, 
                        and delete their images. It was built with React Js, Tailwind CSS, 
                        Node Js (Express), MySQL, and Cloudinary. This is my first ever
                        deployed project.
                    </p> 
                    <a href="https://koketjocomgallery.netlify.app/" target="_blank">View Project</a>
                </div>

                <div className="project-n project2">
                    <div className="preview">
                        <img src="../account-system.png" alt="accountsystem pic" />                                 
                    </div>    
                    <h2>Account System (Discovery)</h2>
                    <p>
                        The objective was to create an API for Discovery Vitality that will allow 
                        members to view, add, and subtract miles from their miles account. The project
                        was built using Java with Springboot, MySQL, and Swagger UI. 
                    </p>
                    <a href="https://github.com/KoketjoSethobja/AccountSystem" target="_blank">View Project</a>
                </div>

            </div>
        </div>
    )
}

export default Projects;