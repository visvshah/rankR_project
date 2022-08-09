import React from 'react';
import {Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from 'react-redux';
import List from './List/list.jsx';
import "./lists.scss";
export default function Lists({changeId, openForm, search}){
  const lists = useSelector((state) => state.lists);
  const searchResults = lists.filter((list) => (list.title.toLowerCase().includes(search.toLowerCase())) || (list.name.toLowerCase().includes(search.toLowerCase()))).reverse();
  //searchResults filters through all the posts too create a new array of posts that contain the search field in their title or creator's name. It also reverse the lists array to display newer posts first.
  return (
    lists.length === 0 ? <CircularProgress/> : (
      <Grid className='mainContainer' container spacing={3}>
        {searchResults.map((list, num) =>(
          <Grid key = {num} item xs={12} sm={4}>
            <List list = {list} changeId = {changeId} openForm = {openForm}/>
          </Grid>
        ))}
      </Grid>
    )
  )
} 
