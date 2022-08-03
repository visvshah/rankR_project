import React, {useEffect, useState} from 'react'
import "./app.scss"
import {Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {getLists} from './actions/lists.js'
import RankRLogo from "./images/RankRLogo.png"
import Lists from "./components/Lists/lists.jsx"
import Navbar from "./components/Navbar/navbar.jsx"
import Form from "./components/Forms/forms.jsx"
export default function App() {
  const [currentId, changeId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists());
  },[currentId, dispatch])
  
  return (
      <Container className = "app" maxwidth="lg">
        <Navbar/>
        <Grow in>
          <Container className ="Content">
            <Grid container justifyContent = "space-between" alignItems = "stretch" spacing={3}>
              <Grid className="Posts" item xs={12} sm={7}>
                <Lists changeId = {changeId}/>
              </Grid>
              <Grid className="Form" item xs={12} sm={4}>
                <Form currentId = {currentId} changeId = {changeId}/>
              </Grid>
            </Grid>

          </Container>
        </Grow>
      </Container>
  )
}
