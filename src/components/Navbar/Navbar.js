import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav, Ul, P,} from './NavStyle'


class Navbar extends React.Component{
    render(){
        return(
                <Nav>
                    <P>Developer Udosinachi</P>
                        <Ul>
                            <NavLink 
                                to='/' 
                                className='Nav_link'
                                activeClassName='activeRoute'>Home</NavLink>
                            <NavLink 
                                to='about' 
                                className='Nav_link'
                                activeClassName='activeRoute'>About</NavLink>
                            <NavLink 
                                to='portfolio' 
                                className='Nav_link'
                                activeClassName='activeRoute'>Portfolio</NavLink>
                            <NavLink 
                                to='Contact' 
                                className='Nav_link'
                                activeClassName='activeRoute'>Contact</NavLink>
                        </Ul>
                </Nav>
        )
    }
}

export default Navbar