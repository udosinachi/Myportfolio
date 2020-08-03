import React from 'react'
import {NavLink } from 'react-router-dom'
import {Div } from './Sidestyle'

function Sidedrawer(props){
    return(
        <Div>
            <nav>
                <div className='imagesection'>
                    <img src='/asset/img/pic.jpg' alt='profile'/>
                    <p>Developer Udosinachi</p>
                    <hr/>
                </div>
                <ul>
                    <li><NavLink exact to='/' className='link'>Home</NavLink></li>
                    <li><NavLink exact to='/about' className='link'>About</NavLink></li>
                    <li><NavLink exact to='/profile' className='link'>Profile</NavLink></li>
                    <li><NavLink exact to='/projects' className='link'>Projects</NavLink></li>
                    <li><NavLink exact to='/contact' className='link'>Contact</NavLink></li>
                </ul>
            </nav>
        </Div>
    )
}

export default Sidedrawer