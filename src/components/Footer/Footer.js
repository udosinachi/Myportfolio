import React from 'react'
import {NavLink} from 'react-router-dom'
import {Div, Div1, Div2, Img} from './FooterStyle'

class Footer extends React.Component{
    render(){
        return(
            <Div>
                <Div1>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/1.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/2.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/3.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/4.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/5.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/7.svg' /></a>
                    <a href='' target='_blank' ref='noopener noreferrer'><img src='/Asset/svg/8.svg' /></a>
                </Div1><br/>
                <Div2>
                <div>
                    <h1>Social</h1>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </div><br/>
                <div>
                    <h1>Service</h1>
                    <p>Compare</p>
                    <p>Download</p>
                    <p>Feedback</p>
                    <p>Bug report</p>
                </div><br/>
                <div>
                    <h1>Activity</h1>
                    <p>Web design</p>
                    <p>Tutorials</p>
                    <p>Data services</p>
                </div><br/>
                <div>
                    <h1>Address</h1>
                    <p>Owerri, Imo State, Nigeria</p>
                    <p>Email: udosipat@gmail.com</p>
                </div><br/>
                </Div2>
            </Div>
        )
    }
}

export default Footer