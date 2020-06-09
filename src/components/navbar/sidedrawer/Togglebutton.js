import React from 'react'
import {Button } from './Togglestyle'

function Togglebutton(props){
    return(
        <Button onClick={props.click}>
            <div className='line' />
            <div className='line' />
            <div className='line' />
        </Button>
    )
}

export default Togglebutton