import React from 'react'
import Nav from '../../components/navbar/Nav'
import { Div } from './AboutStyle'
import Footer from '../../components/footer/Footer'

function About(){
    return(
        <Div>
            <Nav navcolor={'black'} textcolor={'white'} hovercolor={'white'} />
            <div className='body'>
                <div style={{marginTop: '130px'}} className='image'>
                    <img src='/asset/img/pro.jpg' alt='profile'/>
                    <p>Developer Udosinachi</p>
                </div><br/>
                <div className='resume'>
                    <a href='https://www.google.com' target='_blank'><button>Resume</button></a>
                </div>
            </div><hr/><br/>

            <div className='icons'>
                    <div className='icon1'>
                        <img src='/asset/svg/css.svg' />
                    </div>
                    <div className='icon2'>
                        <img src='/asset/svg/html.svg' />
                    </div>
                    <div className='icon3'>
                        <img src='/asset/svg/javascript.svg' />
                    </div>
                    <div className='icon4'>
                        <img src='/asset/svg/react.svg' />
                    </div>
                    <div className='icon5'>
                        <img src='/asset/svg/responsive.svg' />
                    </div>
            </div>
            <Footer />
        </Div>
    )
}

export default About