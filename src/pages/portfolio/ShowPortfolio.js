import React from 'react'
import Flex from './Portfoliostyle'
import Portfoliodata from './Portfoliodata'
import Portfolio from './Portfolio'

function ShowPortfolio (props){
    return(
        <Flex>
            {Portfoliodata.map((portfolio) =>(
                <Portfolio key={portfolio.id} portfolio={portfolio} />
            ))}
        </Flex>
    )
}

export default ShowPortfolio