import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './AboutStyle'

function About(){
    return(
        <Div>
            <Nav navcolor={'gray'} />
            <div className='body'>
                <div style={{marginTop: '100px'}} className='image'>
                    <img src='/asset/img/pic.jpg' alt='profile'/>
                </div><br/>
                <div className='resume'>
                    <button>Resume</button>
                </div>
            </div>
        </Div>
    )
}

export default About