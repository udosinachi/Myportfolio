import React from 'react'
import {Div } from './Portfoliostyle'
import Nav from '../../components/navbar/Nav'

function Portfolio(props){
    return(
        <Div img={props.img}>
            <div>
                <Nav navcolor={'silver'} textcolor={'black'} hovercolor={'black'} />
            </div>
            <div className='card' style={{marginTop: '130px'}} >
                <div className='caption_container'>
                </div>
                <div className='card_text' >
                    <div className='caption'>
                        <h3>{props.text}</h3>
                        <button>{props.button}</button>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Portfolio