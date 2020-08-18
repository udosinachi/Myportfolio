import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './AboutStyle'
import Footer from '../../components/footer/Footer'

function About(){
    return(
        <Div>
            <Nav navcolor={'black'} textcolor={'white'} hovercolor={'white'} />
            <div className='body'>
                <div style={{marginTop: '130px'}} className='image'>
                    <img src='/asset/img/pro.jpg' alt='profile'/>
                    <p>Developer Udosinachi</p>
                </div><br/>
                <div className='resume'>
                    <a href='https://www.google.com' target='_blank'><button>Resume</button></a>
                </div>
            </div>
            <div className='write'>
                <div className='about'>
                    <h1>About</h1>
                    <p>My name is Udosinachi Ofoegbu. I am a frontend web developer from Nigeria.
                        I have always been a Tech Enthusiast, I enjoying checking specs of new devices especially phones and laptops. 
                        I started coding at 2019 with the basics like HTML and CSS from freecodecamp and later on I got some
                        Javascript tutorial videos from a friend and then few months into 2020 I start using my first Javascript
                        library 'React'.<br/><br/>

                        I'm also into Sport(Football), movies, musics, anime and comedy series, but I'm more of a movies person because
                        I spend my free time watch a variety of things.
                    </p>
                </div>
                <div className='skills'>
                    <h1>Hobbies</h1>
                    <ul>
                        <li>Playing games</li>
                        <li>Playing and watching football</li>
                        <li>Eating</li>
                        <li>Sleeping</li>
                        <li>Learning new things</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default About