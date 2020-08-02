import React from 'react'
import {NavLink } from 'react-router-dom'

import {Div } from './NavStyle'
import Togglebutton from './sidedrawer/Togglebutton'


function Navbar(props){
    return(
        <Div navcolor={props.navcolor}>
            <nav>
                <h1><NavLink exact to='/' className='h1' >Developer Udosinachi</NavLink></h1>
                <div className='spacer' />
                <ul>
                    <li><NavLink exact to='/' className='link' activeClassName='active'>Home</NavLink></li>
                    <li><NavLink exact to='/about' className='link' activeClassName='active'>About</NavLink></li>
                    <li><NavLink exact to='/portfolio' className='link' activeClassName='active'>Portfolio</NavLink></li>
                    <li><NavLink exact to='/contact' className='link' activeClassName='active'>Contact</NavLink></li>
                </ul>
                <div className='hamburger'>
                    <Togglebutton click={props.clickhandler} />
                </div>
            </nav>
        </Div>
    )
}

export default Navbar