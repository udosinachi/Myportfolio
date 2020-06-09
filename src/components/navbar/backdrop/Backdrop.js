import React from 'react'
import {Div } from './Backstyle'

function Backdrop(props){
    return(
        <Div onClick={props.click} />
    )
}

export default Backdrop