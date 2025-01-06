import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";


export default function MyService({service}){
    return(
    <div className="my-services" ref={service}>
        <div style={{fontSize:'2.5rem',fontWeight:'bold',paddingBottom:'2rem'}}>My Services</div>
        <div className="services-list">
            <div className="my-services-text">
                <div style={{fontSize:'4rem'}}><IoLogoReact /></div>
                <div className="my-services-heading">Web Design</div>
                <div className="my-services-para">I can design websites (HTML,CSS,JS,React)</div>
            </div>
            <div className="my-services-text">
                <div style={{fontSize:'4rem'}}><IoLogoJavascript />
                </div>
                <div className="my-services-heading">Programming</div>
                <div className="my-services-para">I can program in different languages(C, C++, JAVA, C#)</div>
            </div>
            <div className="my-services-text">
                <div style={{fontSize:'4rem'}}><FaFigma />
                </div>
                <div className="my-services-heading">UI/UX Design</div>
                <div className="my-services-para">I can use Figma</div>
            </div>
            
        </div>
    </div>
    )
}