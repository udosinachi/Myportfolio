import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
background: black;
color: white;
`
const Div1 = styled.div`
background: whitesmoke;
display: flex;
justify content: space-evenly;
padding: 1em;
`
const Div2 = styled.div`
display: flex;
justify-content: space-evenly;
padding-bottom: 3em;
margin-left: 4em;
`
const Img = styled.img`
margin-left: 8em;
`

class Footer extends React.Component{
    render(){
        return(
            <Div>
                <Div1>
                    <Img src='/Asset/svg/1.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/2.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/3.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/4.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/5.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/7.svg' width='3%' height='3%' /><br/>
                    <Img src='/Asset/svg/8.svg' width='3%' height='3%' /><br/>
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