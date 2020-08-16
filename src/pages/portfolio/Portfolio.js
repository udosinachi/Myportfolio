import React from 'react'
import {Div } from './Portfoliostyle'


function Portfolio(props){
    return(
        <Div img={props.img}>
            <div className='layout' style={{marginTop: '130px'}} >
                <div className='freediv'>
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