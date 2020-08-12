import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './Contactstyle'

class Contact extends React.Component{
    render(){
        return(
            <Div>
                <Nav navcolor={'silver'} />
                <div style={{marginTop: '130px'}} className='body'>
                    <div className='text'>
                        <h1>Contact</h1>
                        <p>Get in touch with Udosinachi Ofoegbu</p>
                    </div>
                    <div className='bodyform'>
                        <form>
                            <h1>Let's Work Together</h1>
                            <input type='text' placeholder='Name' /><br/>
                            <input type='email' placeholder='Email Address' /><br/>
                            <input type='text' placeholder='Subject' /><br/>
                            <textarea placeholder='Hello there' /><br/>
                            <button>Let's Talk Soon</button>
                        </form>
                        <div className='social'>
                            <p>Ready? If you're ready to talk then I'm here to listen. Send me a message and we'll start a conversation towards your next design. I look forward to building new sites or making invitations for that special event. I also enjoy meeting and collaborating with other designers. If you have a UI concept you'd like to see become a reality but lack the coding portion let's see what we can do. Media inquiries? Sure</p>
                            <div className='icons'>
                                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/1.svg' alt='icon' className='1' /></a>
                                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/3.svg' alt='icon' className='2' /></a>
                                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/4.svg' alt='icon' className='3' /></a>
                                <a href='https://www.google.com' target='_blank'><img src='/asset/svg/8.svg' alt='icon' className='4' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
        )
    }
}

export default Contact