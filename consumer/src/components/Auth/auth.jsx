import React, {useState} from 'react'
import {Container, Button, Paper, Grid, TextField} from '@material-ui/core'
import "./auth.scss";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./input.jsx"

export default function auth() {
    const signedUp = true;
    const [showPassword, changeShowPassword] = useState(false);
    const handleSubmit = () =>{

    }
    const handleChange = () =>{

    }
    const handleShowPassword = () =>{
        changeShowPassword(!showPassword);
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
                                <Grid xs = {6} md ={12}>

                                </Grid>
                                <Input name = "firstName" label = "First Name" handleChamge = {handleChange} autoFocus half/>
                                <Input name = "lastName" label = "Last Name" handleChamge = {handleChange} half/>
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
            </form>
            </Paper>
        </Container>
    )
}