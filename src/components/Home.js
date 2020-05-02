import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background-image: url('/Asset/Img/h.jpg');
background-size: 100%;
height: auto;
border-bottom-left-radius: 90px;
border-bottom-right-radius: 90px;
`
const P = styled.strong`
display: flex;
justify-content: center;
`
const H1 = styled.h1`
display: flex;
justify-content: center;
`
const Div1 = styled.div`
padding: 9em;
`
const Div2 = styled.div`
width: 50%;
margin-top: 10%;
background: grey;
padding: 4em 0 2em;
border-radius: 90px;
`
const Div3 = styled.li`
display: flex;
justify-content: center;
`
const Img = styled.img`

`
const P1 = styled.h2`
text-decoration: none;
color: white;
display: flex;
justify-content: center;
`
const Div4 = styled.div`

`


class Home extends React.Component{
    render(){
        return(
            <Div>
                <Div1>
                    <P>I'm Udosinachi and I am a frontend web developer,</P>
                    <P>Welcome to my</P>
                    <H1>PERSONAL PORTFOLIO</H1>
                </Div1>
                <Div2>
                    <Div3>
                        <Img src='/Asset/svg/icon-1.svg' alt='1st'/>
                    </Div3>
                    <P1>Tablet responsive</P1>
                    <Div3>
                        <Img src='/Asset/svg/icon-2.svg' alt='2nd' /> 
                    </Div3>
                    <P1>Low data cost</P1>
                    <Div3>
                        <Img src='/Asset/svg/icon-3.svg' alt='3rd'/>
                    </Div3>
                    <P1>Phone responsive</P1>
                </Div2>
                <Div4>
                    <img src='/Asset/Img/j.jpeg' alt='4th' />
                </Div4>
            </Div>
        )
    }
}

export default Home