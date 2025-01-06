import rps from './img/rps.jpg'
import ttt from './img/tic-tac-toe.jpg'
import travel from './img/travel.jpg'
import { IoNavigate } from "react-icons/io5";


export default function MyWorks({work}){
    return(
        <div className="works" ref={work}>
            <div style={{fontSize:'2.5rem',fontWeight:'bold',paddingBottom:'2rem'}}>
                My Works
            </div>
            <div className="my-works">
                <div className='my-works-img'>
                    <img src={rps} style={{objectFit:'cover',height:'100%',width:'100%'}}/>
                    <div className='hover'>
                        <div style={{fontWeight:'bold'}}>Rock Paper Scissors</div>
                        <div>This lets you play the rock paper scissors game</div>
                        <a href='https://rock-paper-scissors-11r.pages.dev/' target='_blank' className='navigate-button'>
                            <IoNavigate />
                        </a>
                    </div>
                </div>
                <div className='my-works-img'>
                    <img src={ttt} style={{objectFit:'cover',height:'100%',width:'100%'}}/>
                    <div className='hover'>
                        <div style={{fontWeight:'bold'}}>Tic Tac Toe</div>
                        <div>This lets you play the tic tac toe game</div>
                        <button className='navigate-button'>
                            <IoNavigate />
                        </button>
                    </div>
                </div>
                <div className='my-works-img'>
                    <img src={travel} style={{objectFit:'cover',height:'100%',width:'100%'}}/>
                    <div className='hover'>
                        <div style={{fontWeight:'bold'}}>Travel Management Website</div>
                        <div>A general travel management website</div>
                        <button className='navigate-button'>
                            <IoNavigate />
                        </button>
                    </div>
                </div>
            </div>
            <div className='see-more'>
                <div className='see-more-btn'>See More</div>
            </div>
        </div>
    )
}