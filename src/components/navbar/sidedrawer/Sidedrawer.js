import React from 'react'
import {NavLink } from 'react-router-dom'
import {Div } from './Sidestyle'

function Sidedrawer(props){
    let drawerClasses = 'nav'
    if(props.show) {
        drawerClasses = 'nav open'
    }
    return(
        <Div>
            <nav className={drawerClasses}>
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