import React from 'react'
import Navbar from './Navbar'
import Sidedrawer from './sidedrawer/Sidedrawer'
import Backdrop from './backdrop/Backdrop'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            open: false,
        }
    }

    handler = () => {
        this.setState((prevState) => {
            return {open: !prevState.open}
        })
    }

    backhandler = () => {
        this.setState({open : false})
    }

    render(){
        let backDrop;
        let sidedrawer

        if(this.state.open){
            backDrop = <Backdrop click={this.backhandler}/>
            sidedrawer = <Sidedrawer />
        }
        return(
            <div style={{height: '100%'}}>
                <Navbar 
                    clickhandler={this.handler} 
                    navcolor={this.props.navcolor} 
                />
                {sidedrawer}
                {backDrop}
                
            </div>
        )
    }
}

export default Home