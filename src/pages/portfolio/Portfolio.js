import React from 'react'
import {Div } from './Portfoliostyle'
import Nav from '../../components/navbar/Nav'
import Portfoliodata from './Portfoliodata'

function Portfolio (props){
    const Portfoliocomponent = Portfoliodata.map(item => <Portfolio key={item.id} product={item} /> )
    return(
        <Div>
            <Nav navcolor={'silver'} textcolor={'black'} hovercolor={'black'} />
            <div className='layout' style={{marginTop: '130px'}} >
                <div>
                    <img src='/asset/img/e.jpg' /><br/>
                    <div className='inside'>
                        <h3>My First Project</h3><br/>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Portfolio