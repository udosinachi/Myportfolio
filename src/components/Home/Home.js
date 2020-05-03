import React from 'react'
import {Div, P, H1, Div1, P1, Div2, A} from './HomeStyle'

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