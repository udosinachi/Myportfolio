import React from 'react'
import {Div} from './AboutStyle'

class About extends React.Component{
    render(){
        return(
            <Div>
                <div className='div1'>
                    <h1>About</h1>
                    <p>Get to know the web developer</p>
                </div>
                <div className='div2'>
                    <h1>The Developer</h1>
                    <p>Hello. My name is Udosinachi Ofoegbu. I code and build websites. I really enjoy my screen
                        time and I'm always looking foward to learn new coding methods and skills to make what i do
                        easy.<br/><br/> More specifically, I'm a frontend web developer with knowledge in HTML, CSS,
                        Javascript, React and some react pages. With the little i know, i can confortable design and
                        responsive website. I'm based in Nigeria and I have a bachelors degree in food science and technology, I know you have 
                        questions about my degree and what I'm doing now, well, I have always been a technology euthusiast
                        and its not too late for a career change.
                    </p>
                </div>
                <div className='div3'>
                    <img src='/Asset/Img/5.jpg' alt='photo'/>
                    <div>
                        <h1>Hobbies</h1>
                        <p>* Playing and Watching Football</p>
                        <p>* Coding</p>
                        <p>* Eating</p>
                        <p>* Sleeping</p>
                        <p>* Play mobile and console games</p>
                        <p>* Coding again</p>
                        <p>* Learning new things</p>
                    </div>
                </div>
            </Div>
        )
    }
}

export default About