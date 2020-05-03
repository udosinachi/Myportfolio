import React from 'react'
import {Div, P, H1, Div1, Div2, A} from './HomeStyle'

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
                            <h1>Html</h1>
                            <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                            <button className='button1'><a href='https://en.wikipedia.org/wiki/HTML'>Learn more</a></button>
                        </A><br/>
                        <A>
                            <p className='p2'>&lt;style&gt;</p>
                            <h1>CSS</h1>
                            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
                            <button className='button2'><a href='https://en.wikipedia.org/wiki/Cascading_Style_Sheets'>Learn more</a></button>
                        </A>
                        <A>
                            <p className='p3'>() =></p>
                            <h1>JavaScript</h1>
                            <p>JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript also...</p>
                            <button className='button3'><a href='https://en.wikipedia.org/wiki/JavaScript'>Learn more</a></button>
                        </A><br/>
                   </div>
                   <div className='div1'>
                        <A>
                            <p className='p4'>&lt;React/&gt;</p>
                            <h1>React</h1>
                            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React...</p>
                            <button className='button4'><a href='https://reactjs.org/'>Learn more</a></button>
                        </A>
                        <A>
                            <p className='p5'> Store.js </p>
                            <h1>React Redux</h1>
                            <p>React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React. Predictable</p>
                            <button className='button5'><a href='https://react-redux.js.org/'>Learn more</a></button>
                        </A><br/>
                        <A>
                            <p className='p6'>&lt;BrowserRoute&gt; </p>
                            <h1>React Router</h1>
                            <p>React Router is a collection of navigational components that compose declaratively with your application ...</p>
                            <button className='button6'><a href='https://reacttraining.com/react-router/'>Learn more</a></button>
                        </A><br/>
                   </div>
                </Div2>                
            </Div>
        )
    }
}

export default Home