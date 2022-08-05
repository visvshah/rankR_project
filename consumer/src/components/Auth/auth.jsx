import React, {useState} from 'react';
import {Container, Button, Paper, Grid, TextField} from '@material-ui/core';
import "./auth.scss";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input.jsx";
import {signin, signup} from "../../actions/auth.js"

export default function auth() {
    const [showPassword, changeShowPassword] = useState(false);
    const [signedUp, changeSignedUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [userData, setUserData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
    });
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userData);
        if(signedUp){
            dispatch(signup(userData, history))
        }
        else{
            dispatch(signin(userData, history))
        }
    }
    const handleChange = (event) =>{
        setUserData({...userData, [event.target.name]:event.target.value})
    }
    const handleShowPassword = () =>{
        changeShowPassword(!showPassword);
    }
    const switchMode = ()=>{
        changeSignedUp(!signedUp);
    }
    return (
        <Container component="main" maxWidth = "xs">
            <Paper className = "paper" elevation={3}>
                <div className="avatar">

                </div>
            <h3>{signedUp ? "Sign Up" : "Sign In"}</h3>
            <form className = "form" onSubmit={handleSubmit}>
                <Grid container spacing = {2}>
                    {
                        signedUp && (
                            <>
                                <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
                                <Input name = "lastName" label = "Last Name" handleChange = {handleChange} half/>
                            </>
                        )
                    }
                    <Input name = "email" label = "Email Address" handleChange = {handleChange} type = "email"/>
                    <Input name = "password" label = "Password" handleChange = {handleChange} type = {showPassword ? "text" : "password"} handleShowPassword = {handleShowPassword}/>
                    {signedUp && <Input name = "confirmPassword" label = "Repeat Password" handleChange={handleChange} type = "password"/>}
                </Grid>
                <Button type = "submit" fullWidth variant = "contained" color = "primary" className = "submit">
                    {signedUp ? "Sign Up" : "Sign In"}
                </Button>
                <Grid container justify = "flex-end">
                    <Grid item>
                        <Button onClick = {switchMode}>
                            {signedUp ? "Sign In Instead" : "Sign Up Instead"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Container>
    )
}