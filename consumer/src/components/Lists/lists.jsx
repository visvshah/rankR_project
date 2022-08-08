import React from 'react'
import {Grid, CircularProgress} from "@material-ui/core"
import {useSelector} from 'react-redux'
import List from './List/list.jsx';
import "./lists.scss"
export default function Lists({changeId, openForm}){
  const lists = useSelector((state) => state.lists);
  return (
    lists.length === 0 ? <CircularProgress/> : (
      <Grid className='mainContainer' container spacing={3}>
        {lists.map((list, num) =>(
          <Grid key = {num} item xs={12} sm={4}>
            <List list = {list} changeId = {changeId} openForm = {openForm}/>
          </Grid>
        ))}
      </Grid>
    )
  )
} 
