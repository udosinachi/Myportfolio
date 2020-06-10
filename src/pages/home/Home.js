import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidedrawer from '../../components/navbar/sidedrawer/Sidedrawer'
import Backdrop from '../../components/navbar/backdrop/Backdrop'

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
                <Navbar clickhandler={this.handler} />
                {sidedrawer}
                {backDrop}
            </div>
        )
    }
}

export default Home