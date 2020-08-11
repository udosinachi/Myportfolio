import React from 'react'
import {Div } from './FooterStyle'

function Footer(){
    return(
        <Div>
            <div className='footer-icons'>
                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/1.svg' alt='icon' className='1' /></a>
                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/3.svg' alt='icon' className='2' /></a>
                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/4.svg' alt='icon' className='3' /></a>
                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/8.svg' alt='icon' className='4' /></a>
            </div>
            <hr/>
            <p>Developer Udosinachi @2020</p>
        </Div>
    )
}

export default Footer