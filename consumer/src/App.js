import React from 'react'
import "./app.scss"
import {Container} from '@material-ui/core'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/navbar.jsx"
import Home from "./components/Home/home.jsx"

export default function App() {
  return (
      <Container className = "app" maxwidth="lg">
        <Navbar/>
        <Home/>
      </Container>
  )
}
