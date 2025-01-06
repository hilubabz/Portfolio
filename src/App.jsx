import AboutMe from "./assets/about"
import Main from "./assets/mainPage"
import Navbar from "./assets/navbar"
import { useRef } from "react"
import MyService from "./assets/services"
import MyWorks from "./assets/works"
import ContactMe from "./assets/contact"


function App() {
  const home=useRef(null)
  const about=useRef(null)
  const service=useRef(null)
  const work=useRef(null)
  const contact=useRef(null)

  return (
     <>
      <Navbar home={home} about={about} service={service} work={work} contact={contact}/>
      <Main home={home}/>
      <AboutMe about={about}/>
      <MyService service={service}/>
      <MyWorks work={work}/>
      <ContactMe contact={contact}/>
     </>
  )
}

export default App
