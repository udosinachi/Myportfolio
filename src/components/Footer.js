import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
background: black;
color: white;
`

class Footer extends React.Component{
    render(){
        return(
            <Div>
                <h1>Footer</h1>
            </Div>
        )
    }
}

export default Footer