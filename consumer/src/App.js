import React from 'react'
import "./app.scss"
import {Container} from '@material-ui/core'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/navbar.jsx"
import Home from "./components/Home/home.jsx"
import Auth from './components/Auth/auth.jsx'

export default function App() {
  return (
      <BrowserRouter>
        <Container className = "app" maxwidth="lg">
          <Navbar/>
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/login" exact component = {Auth}/>
          </Switch>
        </Container>
      </BrowserRouter>
  )
}
