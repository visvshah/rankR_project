import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper, ListItemSecondaryAction} from '@material-ui/core'
import { useDispatch, useSelector} from 'react-redux';
import {createList, updateList} from '../../actions/lists.js';
import './forms.scss';


export default function forms({currentId, changeId}) {
  const [listData, setListData] = useState({author: '', title: '', content: '', tags: ''});
  const dispatch = useDispatch();
  const list = useSelector((state) => currentId !== 0 ? state.lists.find((p) => p._id === currentId) : null);

  useEffect(()=>{
    if(list) setListData(list);
  },[list])

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(currentId !== 0){
      dispatch(updateList(currentId, listData));
    }
    else{
      dispatch(createList(listData));
    }
    clear();
  }
  
  const clear = ()=>{
    changeId(0);
    setListData({author: '', title: '', content: '', tags: ''});
  }
  
  return (
    <Paper className = "paper">
      <form autoComplete = "off" validate="true" className = 'form' onSubmit = {handleSubmit}>
        <Typography variant = "h6">{currentId !== 0 ? 'Editing' : 'Creating'} a List</Typography>
        <TextField className = 'input' name = "title" variant = "outlined"  label = "Title"  fullWidth value = {listData.title} onChange = {(e) => setListData({...listData, title: e.target.value})}/>
        <TextField className = 'input' name = "author" variant = "outlined"  label = "Author"  fullWidth value = {listData.author} onChange = {(e) => setListData({...listData, author: e.target.value})}/>
        <TextField className = 'input' name = "content" variant = "outlined"  label = "Content" fullWidth multiline minRows = {10} maxRows={10} value = {listData.content} onChange = {(e) => setListData({...listData, content: e.target.value})}/>
        <TextField className = 'input' name = "tags" variant = "outlined"  label = "Tags"  fullWidth value = {listData.tags} onChange = {(e) => setListData({...listData, tags: e.target.value})}/>
        <Button className ="buttonSubmit" variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
        <Button variant = "contained" color = "secondary" size = "small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
