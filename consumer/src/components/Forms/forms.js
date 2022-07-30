import React, {useState} from 'react'
import { TextField, Button, Typography, Paper, ListItemSecondaryAction} from '@material-ui/core'
import FileBase from 'react-file-base64';
import './forms.scss'
export default function forms() {
  const [listData, setListData] = useState({
    author: '', title: '', content: '', tags: ''
  });
  const handleSubmit = () =>{

  }
  const clear = ()=>{

  }
  return (
    <Paper className = "paper">
      <form autoComplete = "off" Validate className = 'form' onSumbit = {handleSubmit}>
        <Typography variant = "h6">Create a List</Typography>
        <TextField className = 'input' name = "title" variant = "outlined"  label = "Title"  fullWidth value = {listData.title} onChange = {(event) => setListData({...listData, title: event.target.value})}/>
        <TextField className = 'input' name = "content" variant = "outlined"  label = "Content"  fullWidth value = {listData.content} onChange = {(event) => setListData({...listData, content: event.target.value})}/>
        <TextField className = 'input' name = "author" variant = "outlined"  label = "Author"  fullWidth value = {listData.author} onChange = {(event) => setListData({...listData, author: event.target.value})}/>
        <TextField className = 'input' name = "tags" variant = "outlined"  label = "Tags"  fullWidth value = {listData.tags} onChange = {(event) => setListData({...listData, tags: event.target.value})}/>
        <Button className ="buttonSubmit" variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
        <Button variant = "contained" color = "secondary" size = "small" OnClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
