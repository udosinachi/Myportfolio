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
                            <textarea placeholder='Hello there' />
                        </form>
                    </div>
                </div>
            </Div>
        )
    }
}

export default Contact