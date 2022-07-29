import React, {useEffect} from 'react'
import "./app.scss"
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/lists.js'
import RankRLogo from "./images/RankRLogo.png"
import Lists from "./components/Lists/lists.js"
import Form from "./components/Forms/forms.js"
export default function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getPosts());
  },[dispatch])
  return (
      <Container className = "app" maxwidth="lg">
        <AppBar className ="navBar" position='static' color='inherit'>
          <Typography className ="heading" variant='h2' align='center'>Your Lists</Typography>
          <img src = {RankRLogo} alt = "RankR Logo"/>
        </AppBar>
        <Grow in>
          <Container className ="Content">
            <Grid container justify = "space-between" alignItems = "stretch" spacing={3}>
              <Grid className="Posts" item xs={12} sm={7}>
                <Lists/>
              </Grid>
              <Grid className="Form" item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>

          </Container>
        </Grow>
      </Container>
  )
}
