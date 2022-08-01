import React, {useState} from 'react'
import { TextField, Button, Typography, Paper, ListItemSecondaryAction} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import {createList} from '../../actions/lists.js';
import './forms.scss';


export default function forms() {
  const [listData, setListData] = useState({
    author: '', title: '', content: '', tags: ''
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) =>{
    console.log("handleSubmit")
    event.preventDefault();
    dispatch(createList(listData));
  }
  const breakContent = (contentInput)=>{
    const items = [String];
    
  }
  const clear = ()=>{

  }
  return (
    <Paper className = "paper">
      <form autoComplete = "off" Validate className = 'form' onSubmit = {handleSubmit}>
        <Typography variant = "h6">Create a List</Typography>
        <TextField className = 'input' name = "title" variant = "outlined"  label = "Title"  fullWidth value = {listData.title} onChange = {(e) => setListData({...listData, title: e.target.value})}/>
        <TextField className = 'input' name = "author" variant = "outlined"  label = "Author"  fullWidth value = {listData.author} onChange = {(e) => setListData({...listData, author: e.target.value})}/>
        <TextField className = 'input content' name = "content" variant = "outlined"  label = "Content" fullWidth value = {listData.content} onChange = {(e) => setListData({...listData, content: e.target.value})}/>
        <TextField className = 'input' name = "tags" variant = "outlined"  label = "Tags"  fullWidth value = {listData.tags} onChange = {(e) => setListData({...listData, tags: e.target.value})}/>
        <Button className ="buttonSubmit" variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
        <Button variant = "contained" color = "secondary" size = "small" OnClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
