import React from 'react'
import {Div } from './Portfoliostyle'
import Nav from '../../components/navbar/Nav'

function Portfolio (props){
    return(
        <Div>
            <Nav navcolor={'silver'} textcolor={'black'} hovercolor={'black'} />
            <div className='layout' style={{marginTop: '130px'}} >
                <div>
                    <img src='/asset/img/e.jpg' /><br/>
                    <div className='inside'>
                        <h3>My First Project</h3><br/>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Portfolio