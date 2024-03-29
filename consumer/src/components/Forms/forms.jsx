import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import { useDispatch, useSelector} from "react-redux";
import {createList, updateList} from "../../actions/lists.js";
import "./forms.scss";


export default function forms({currentId, changeId, openForm}) {
  const [listData, setListData] = useState({title: "", content: ""});
  const dispatch = useDispatch();
  const list = useSelector((state) => currentId !== 0 ? state.lists.find((p) => p._id === currentId) : null);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(()=>{
    if(list) setListData(list);
  },[list])

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(user);
    openForm();
    if(currentId !== 0){
      dispatch(updateList(currentId, {...listData, name: user?.result?.name}));
    }
    else{
      dispatch(createList({...listData, name: user?.result?.name}));
    }
    clear();
  }
  
  const clear = ()=>{
    changeId(0);
    setListData({title: "", content: "", tags: ""});
  }
  
  if(!user?.result?.name){
    return(
      <Paper className = "paper">
        <h4>Please Sign in before creating a List!</h4>
      </Paper>
    );
  }

  return (
    <Paper className = "paper">
      <form autoComplete = "off" validate = "true" className = "form" onSubmit = {handleSubmit}>
        <Typography variant = "h6">{currentId !== 0 ? "Editing" : "Creating"} a List</Typography>
        <TextField className = "input" name = "title" variant = "outlined"  label = "Title"  fullWidth value = {listData.title} onChange = {(e) => setListData({...listData, title: e.target.value})}/>
        <TextField className = "input" name = "content" variant = "outlined"  label = "Content: use a comma to seperate items" fullWidth multiline minRows = {10} maxRows={10} value = {listData.content} onChange = {(e) => setListData({...listData, content: e.target.value.split(",")})}/>
        <Button className ="buttonSubmit" variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Submit</Button>
        <Button variant = "contained" size = "small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
