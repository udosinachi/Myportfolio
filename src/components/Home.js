import React from 'react'
import styled from 'styled-components'

const Div = styled.div`

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
padding: 10em;
background-image: url('/Asset/Img/h.jpg');
background-size: 100%;
`
const P1 = styled.h2`
text-decoration: none;
color: white;
display: flex;
justify-content: center;
`
const Div2 = styled.div`
width: 80%;
border: 5px solid black;
padding: 30px;
margin: 1em 0 1em 4em;

`
const A = styled.div`
width: 300px;
border: 5px solid black;
padding: 10px;
margin: 10px;
font-size: 16px;
text-align: center;
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
                   <div className='div1'>
                        <A>
                            <p className='p1'>&lt;div&gt; </p>
                            <h1>HTML</h1>
                            <p>Learnt html from youtube videos</p>
                            <button className='button1'>Learn more</button>
                        </A><br/>
                        <A>
                            <p className='p2'>&lt;style&gt;</p>
                            <h1>CSS</h1>
                            <p>its not too complex</p>
                            <button className='button2'>Learn more</button>
                        </A>
                        <A>
                            <p className='p3'>() =></p>
                            <h1>JAVASCRIPT</h1>
                            <p>Learnt javascript</p>
                            <button className='button3'>Learn more</button>
                        </A><br/>
                   </div>
                   <div className='div1'>
                        <A>
                            <p className='p4'>&lt;React/&gt;</p>
                            <h1>REACT</h1>
                            <p>Learnt React</p>
                            <button className='button4'>Learn more</button>
                        </A>
                        <A>
                            <p className='p1'>&lt;div&gt; </p>
                            <h1>HTML</h1>
                            <p>Learnt html from youtube videos</p>
                            <button className='button1'>Learn more</button>
                        </A><br/>
                        <A>
                            <p className='p1'>&lt;div&gt; </p>
                            <h1>HTML</h1>
                            <p>Learnt html from youtube videos</p>
                            <button className='button1'>Learn more</button>
                        </A><br/>
                   </div>
                </Div2>                
            </Div>
        )
    }
}

export default Home