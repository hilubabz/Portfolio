import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function ContactMe({contact}){
    return(
        <div className="contact-div" ref={contact}>
            <div className="contact">
                <div style={{fontSize:'3rem',fontWeight:'bold'}}>Contact Me</div>
                <div className="contact-content">
                    <CiMail />
                    <div>utsargam44@gmail.com</div>
                </div>
                <div className="contact-content">
                    <MdOutlinePhone />
                    <div>9860923323</div>
                </div>
                <div className="contact-content logo">
                    <FaInstagram />
                    <FaFacebookF />
                    <FaGithub />
                    <FaSquareXTwitter />
                </div>
                <div className="cv"><div className="cv-button">Download CV</div></div>
            </div>
            <div className="form">
                <input type="text" placeholder="Your Name" className="form-text"/>
                <input type="email" placeholder="Your Email" className="form-text"/>
                <textarea placeholder="Message" className="form-msg"></textarea>
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    )
}