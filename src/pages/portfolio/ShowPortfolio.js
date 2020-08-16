import React from 'react'
import {Flex } from './Portfoliostyle'
import Portfoliodata from './Portfoliodata'
import Portfolio from './Portfolio'
import Footer from '../../components/footer/Footer'

function ShowPortfolio (props){

    const PortfolioComponents = Portfoliodata.map(ports => <Portfolio key={ports.id} text={ports.text} 
        img={ports.img} button={ports.button} /> )

    return(
        <div>
            <Flex>
                {PortfolioComponents}
            </Flex>
            <div style={{marginTop: '150px'}}>
                <Footer />
            </div>
        </div>
        
    )
}

export default ShowPortfolio