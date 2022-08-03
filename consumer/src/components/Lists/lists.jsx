import React from 'react'
import {Grid, CircularProgress} from "@material-ui/core"
import {useSelector} from 'react-redux'
import List from './List/list.jsx';
import "./lists.scss"
export default function Lists({changeId}){
  const lists = useSelector((state) => state.lists);
  console.log(lists);
  return (
    lists.length ===0 ? <CircularProgress/> : (
      <Grid className='mainContainer' container spacing={3}>
        {lists.map((list) =>(
          <Grid key = {list.id} item xs={12} sm={6}>
            <List list = {list} changeId = {changeId}/>
          </Grid>
        ))}
      </Grid>
    )
  )
} 
