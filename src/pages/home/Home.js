import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './HomeStyle'
import {NavLink} from 'react-router-dom'


function Home (){
    return(
        <Div>
            <div>
                <Nav textcolor={'black'} hovercolor={'black'} />
            </div>
            <div style={{marginTop: '90px'}} className='home'>
                <h1>
                    Welcome and explore the works of<br/>
                    Udosinachi Ofoegbu<br/>
                    A Frontend Web Developer<br/>
                </h1>
                <div className='buttons'>
                    <NavLink to='/portfolio'><button className='button1'>View Portfolio</button></NavLink>
                    <NavLink to='/contact'><button className='button2'>Contact</button></NavLink>
                </div><br/><br/>
                <div className='icons'>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/1.svg' alt='icon' className='1' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/3.svg' alt='icon' className='2' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/4.svg' alt='icon' className='3' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/8.svg' alt='icon' className='4' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/2.svg' alt='icon' className='4' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/9.svg' alt='icon' className='4' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/10.svg' alt='icon' className='4' /></a>
                    <a href='https://www.google.com' target='_blank'><img src='/asset/svg/11.svg' alt='icon' className='4' /></a>
                </div>
            </div>
            <div>
                <h1>jdjs jdhia</h1>
                <h1>jdjs jdhia</h1>
                <h1>jdjs jdhifsa</h1>
            </div>
        </Div>
    )
}

export default Home