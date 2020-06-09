import React from 'react'
import {NavLink } from 'react-router-dom'

import {Div } from './NavStyle'
import Togglebutton from './sidedrawer/Togglebutton'


function Navbar(props){
    return(
        <Div>
            <nav>
                <div>
                    <Togglebutton click={props.clickhandler} />
                </div>
                <h1>Developer Udosinachi</h1>
                <div className='spacer' />
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

export default Navbar