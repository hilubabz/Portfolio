import Utsarga from './img/Utsarga.jpg'
import { useState } from 'react'

export default function AboutMe({about}) {
    const [select, setSelect] = useState(1)
    return (
        <div className='about-me' ref={about}>
            <div className='photo-div'>
                <img src={Utsarga} className='photo' />
            </div>
            <div style={{ width: '50vw', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>About Me</div>
                <div style={{ fontSize: '1.2rem', color: 'grey' }}>Hello, and welcome to my website! My name is Utsarga, and I'm a passionate student exploring the fascinating world of web development. I'm just beginning my journey, but I'm excited to learn, experiment, and enhance my skills every step of the way.</div>
                <div style={{ display: 'flex', gap: '5rem',padding:'2rem 0' }}>
                    <div className={`about-bar ${select === 1 ? 'visible' : ''}`} onClick={() => setSelect(1)}>Skills</div>
                    <div className={`about-bar ${select === 2 ? 'visible' : ''}`} onClick={() => setSelect(2)}>Experience</div>
                    <div className={`about-bar ${select === 3 ? 'visible' : ''}`} onClick={() => setSelect(3)}>Education</div>
                </div>
                <div className='description' style={{display:select===1?'':'none'}}>
                    <div>
                        <div className='topic'>Web Development</div>
                        <div>I have sound knowledge in HTML, CSS, JS, PHP, React</div>
                    </div>
                    <div>
                        <div className='topic'>UI/UX</div>
                        <div>I have got some experience in Figma</div>
                    </div>
                    <div>
                        <div className='topic'>JAVA Development</div>
                        <div>I have got small idea on JAVA development</div>
                    </div>
                    <div>
                        <div className='topic'>Programming Languages</div>
                        <div>C, C++, JAVA, C#, Python, JavaScript</div>
                    </div>
                </div>
                <div className='description' style={{display:select===2?'':'none'}}>
                    <div className='topic'> Still a student hehe</div>
                </div>
                <div className='description' style={{display:select===3?'':'none'}}>
                    <div>
                        <div className='topic'>2075</div>
                        <div>Completed SEE at Greenfield</div>
                    </div>
                    <div>
                        <div className='topic'>2078</div>
                        <div>Completed +2 in Science at Greenfield</div>
                    </div>
                    <div>
                        <div className='topic'>2079</div>
                        <div>Started studying BSc. CSIT at NCCS</div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}