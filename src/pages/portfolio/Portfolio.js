import React from 'react'
import {Div } from './Portfoliostyle'
import Nav from '../../components/navbar/Nav'

class Portfolio extends React.Component{
    state = {

    }
    render(){
        return(
            <Div>
                <Nav navcolor={'silver'} textcolor={'black'} hovercolor={'black'} />
                <div className='layout' style={{marginTop: '130px'}} >
                    <div>
                        <img src='{this.props.portfolio.img}' /><br/>
                        <div className='inside'>
                            <h3>{this.props.portfolio.text}</h3><br/>
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </Div>
        )
    }
}

export default Portfolio