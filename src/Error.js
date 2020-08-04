import React from 'react'
import Nav from './components/navbar/Nav'
import styled from 'styled-components'

const Div = styled.div`
overflow: hidden;
background: url('/asset/img/404.svg');
background-size: 100%;
height: 100vh;
.h1{
    position: absolute;
    top: 40%;
    right: 40%;
    font-size: 42px;
}
`

function Error(){
    return(
        <Div>
            <Nav />
            <h1 className='h1'>PAGE NOT FOUND!</h1>
        </Div>
    )
}

export default Error