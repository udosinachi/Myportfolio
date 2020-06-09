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
        let sideDrawer;
        let backDrop;

        if(this.state.open){
            backDrop = <Backdrop click={this.backhandler}/>
        }
        return(
            <div style={{height: '100%'}}>
                <Navbar clickhandler={this.handler} />
                <Sidedrawer show={this.state.open} />
                {backDrop}
            </div>
        )
    }
}

export default Home