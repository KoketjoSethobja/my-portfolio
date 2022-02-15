import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faWhatsapp, faGithub, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Contact(){
    return (
        <div id="contact" className="contact">
            
            <h1>Contact <span style={{color: "#ff521d"}}>Me</span></h1>

            <div className="contact-contaner">
                <div className="contact-n phone">
                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                    <a href="tel:+27716490290" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                        <h3>Phone</h3>
                        <p>+27716490290</p>                        
                    </a>
                </div>
                <div className="contact-n email">
                    <a href="mailto:sethobjakoketjo90@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                        <h3>Email</h3>
                        <p>sethobjakoketjo90@gmail.com</p>                        
                    </a>
                </div>
                <div className="contact-n linkedin">
                    <a href="https://www.linkedin.com/in/koketjo-sethobja-22498a162/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                        <h3>LinkedIn</h3>
                        <p>Koketjo Sethobja</p>                        
                    </a>
                </div>
                <div className="contact-n github">
                    <a href="https://github.com/KoketjoSethobja" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                        <h3>GitHub</h3>
                        <p>Koketjo Sethobja</p>                        
                    </a>
                </div>
                <div className="contact-n facebook">
                    <a href="https://www.facebook.com/koketjo.sethobja.14" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="contact-icon"/>
                        <h3>Facebook</h3>
                        <p>Koketjo Keke</p>                        
                    </a>
                </div>
                <div className="contact-n whatsapp">
                    <a href="https://wa.me/27716490290"target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="contact-icon"/>
                        <h3>Whatsapp</h3>
                        <p>+27716490290</p>                        
                    </a>
                </div>
                <div className="contact-n twitter">
                    <a href="https://twitter.com/SKoketjo" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="contact-icon"/>
                        <h3>Twitter</h3>
                        <p>@SKoketjo</p>                        
                    </a>
                </div>
                <div className="contact-n telegram">
                    <a href="https://t.me/koketjo90" target="_blank">
                        <FontAwesomeIcon icon={faTelegram} className="contact-icon" rel="noreferrer"/>
                        <h3>Telegram</h3>
                        <p>@Koketjo90</p>                        
                    </a>
                </div>
            </div>

        </div>
    )
}
 
export default Contact;