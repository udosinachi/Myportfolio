import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Error from './Error'
import ShowPortfolio from './pages/portfolio/ShowPortfolio'


function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={ShowPortfolio} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
