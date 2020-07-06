import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './AboutStyle'
import Footer from '../../components/footer/Footer'

function About(){
    return(
        <Div>
            <Nav navcolor={'silver'} />
            <div className='body'>
                <div style={{marginTop: '100px'}} className='image'>
                    <img src='/asset/img/pic.jpg' alt='profile'/>
                </div><br/>
                <div className='resume'>
                    <a href='https://www.google.com' target='_blank'><button>Resume</button></a>
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default About