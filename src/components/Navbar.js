import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Nav = styled.nav`
display: flex;
justify-content: space-between;
background: grey;
background-image: url('/Asset/Img/h.jpg');
background-size: 100%;
position: fixed;
width: 100%;
`
const Ul = styled.ul`
margin-right: 2em;
`
const P = styled.p`
font-size: 20px;
`
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