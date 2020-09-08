import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './AboutStyle'
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
            </div><hr/>
            <Footer />
        </Div>
    )
}

export default About