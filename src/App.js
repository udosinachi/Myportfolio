import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
          <Route path='/' component={Footer} />
      </BrowserRouter>
      
    )
  }
}

export default App;
