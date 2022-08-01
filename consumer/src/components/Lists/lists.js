import React from 'react'
import {Grid, CircularProgress} from "@material-ui/core"
import {useSelector} from 'react-redux'
import List from './List/list.js';
import "./lists.scss"
export default function Lists(){
  const lists = useSelector((state) => state.lists);
  console.log(lists);
  if(lists.length < 1){
    return <CircularProgress/>
  }
  else{
    return (
      <Grid className='mainContainer' container spacing={3}>
        {lists.map((list) =>(
          <Grid key = {list.id} item xs={12} sm={6}>
            <List list = {list}/>
          </Grid>
        ))}
      </Grid>
    )
  } 
}
