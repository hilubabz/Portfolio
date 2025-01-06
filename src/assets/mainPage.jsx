import '../index.css'
import reactImg from './img/React.png'

export default function Main({home}){
    return(
        <div className='main-page' ref={home}>
            <div>
                <div className='main-page-text'>Still a learner</div>
                <div className='main-page-text-intro'>Hello, I'm <p style={{color:'blue'}}>Utsarga</p></div>
                <div className='main-page-text-intro'>Just a student learning development</div>
            </div>
            <div>
                <img src={reactImg}></img>
            </div>
        </div>
    )
}