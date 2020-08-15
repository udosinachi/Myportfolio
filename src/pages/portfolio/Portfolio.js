import React from 'react'
import {Div } from './Portfoliostyle'
import Nav from '../../components/navbar/Nav'

function Portfolio(props){
    return(
        <Div>
            <div>
                <Nav navcolor={'silver'} textcolor={'black'} hovercolor={'black'} />
            </div>
            <div className='layout' style={{marginTop: '130px'}} >
                <div>
                    <img src={props.img} /><br/>
                    <div className='inside'>
                        <h3>{props.text}</h3><br/>
                        <button>{props.button}</button>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Portfolio