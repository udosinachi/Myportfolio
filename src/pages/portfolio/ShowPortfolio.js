import React from 'react'
import {Flex } from './Portfoliostyle'
import Portfoliodata from './Portfoliodata'
import Portfolio from './Portfolio'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'

function ShowPortfolio (props){

    const PortfolioComponents = Portfoliodata.map(ports => <Portfolio key={ports.id} text={ports.text} 
        img={ports.img} button={ports.button} /> )

    return(
        <Flex>
            <Nav navcolor={'black'} textcolor={'white'} hovercolor={'white'} />
            <div className='text' style={{marginTop: '130px'}}>
                <h1>Portfolio</h1>
                <p>Explore some of my designed works</p>
            </div>
            <div className='flex'>
                {PortfolioComponents}
            </div>
            <div style={{marginTop: '150px'}}>
                <Footer />
            </div>
        </Flex>
        
    )
}

export default ShowPortfolio