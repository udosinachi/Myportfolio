import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
height: 10%;
width: 10%;

`
const Div = styled.div`
background-image: url('/Asset/Img/h.jpg');
background-size: 100%;
display: flex;
justify-content: center;
`

class About extends React.Component{
    render(){
        return(
            <Div>
                <Img src='/Asset/Img/pic.jpg' alt='pic'/>
            </Div>
        )
    }
}

export default About