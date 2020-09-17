import React from 'react'
import Nav from '../../components/navbar/Nav'
import {Div } from './HomeStyle'
import {NavLink} from 'react-router-dom'


function Home (){
    return(
        <Div>
            <div>
                <Nav textcolor={'black'} hovercolor={'black'} />
            </div>
            <div style={{marginTop: '90px'}} className='home'>
                <h1>
                    Welcome and explore the works of<br/>
                    Udosinachi Ofoegbu<br/>
                    A Frontend Web Developer<br/>
                </h1>
                <div className='buttons'>
                    <NavLink to='/portfolio'><button className='button1'>View Portfolio</button></NavLink>
                    <NavLink to='/contact'><button className='button2'>Contact</button></NavLink>
                </div><br/><br/>
            </div>
        </Div>
    )
}

export default Home