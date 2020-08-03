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
                </div>
                <hr/>
                <ul>
                    <li><NavLink exact to='/' className='link'>Home</NavLink></li><hr/>
                    <li><NavLink exact to='/about' className='link'>About</NavLink></li><hr/>
                    <li><NavLink exact to='/profile' className='link'>Profile</NavLink></li><hr/>
                    <li><NavLink exact to='/contact' className='link'>Contact</NavLink></li><hr/>
                </ul>
            </nav>
        </Div>
    )
}

export default Sidedrawer