import React from 'react'
import Nav from '../../components/navbar/Nav'
import { Div } from './AboutStyle'
import Footer from '../../components/footer/Footer'

function About(){
    return(
        <Div>
            <Nav navcolor={'black'} textcolor={'white'} hovercolor={'white'} />
            <div className='body'>
                <div style={{marginTop: '190px'}} className='image'>
                    <img src='/asset/img/pro.jpg' alt='profile'/>
                    <h4>Developer Udosinachi</h4>
                </div>
                <div className='resume'>
                    <a href='https://www.google.com' target='_blank'><button>Resume</button></a>
                </div>
            </div><br/>

            <div className='write'>
                <p>My name is Udosinachi Ofoegbu. I am a frontend web developer from Nigeria. I designed this website with React.</p>
            </div><br/>

            <div className='icons'>
                    <div className='icon1'>
                        <img src='/asset/svg/html.svg' />
                        <h4>HTML</h4>
                    </div>
                    <div className='icon2'>
                        <img src='/asset/svg/css.svg' />
                        <h4>CSS</h4>
                    </div>
                    <div className='icon3'>
                        <img src='/asset/svg/javascript.svg' />
                        <h4>JAVASCRIPT</h4>
                    </div>
                    <div className='icon4'>
                        <img src='/asset/svg/react.svg' />
                        <h4>REACT</h4>
                    </div>
                    <div className='icon5'>
                        <img src='/asset/svg/responsive.svg' />
                        <h4>RESPONSIVE</h4>
                    </div>
            </div><br/><br/>
            <Footer />
        </Div>
    )
}

export default About