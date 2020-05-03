import React from 'react'
import {Img, Div} from './AboutStyle'

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