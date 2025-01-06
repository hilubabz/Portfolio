import "../index.css"
import Logo from './img/Logo.png'

export default function Navbar({home, about,service,work,contact}){
    const scrollToElement=(myRef)=>{
        myRef.current.scrollIntoView({behavior:'smooth'})
    }
    return(
        <div className="nav">
            <div>
                <img src={Logo} height='200px'></img>
            </div>
            <div className="nav-bar">
                <div onClick={()=>scrollToElement(home)}>Home</div>
                <div onClick={()=>scrollToElement(about)}>About</div>
                <div onClick={()=>scrollToElement(service)}>Services</div>
                <div onClick={()=>scrollToElement(work)}>Portfolio</div>
                <div onClick={()=>scrollToElement(contact)}>Contact</div>
            </div>
        </div>
    )
}