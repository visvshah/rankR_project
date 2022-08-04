import React from "react";
import {AppBar, Button, Toolbar} from '@material-ui/core';
import {Link} from "react-router-dom";
import RankRLogo from "../../images/RankRLogo.png";
import "./navbar.scss";

export default function Navbar() {

    const user = null;
    return (
        <AppBar className ="navBar" position="static" color="inherit">
            <div className="rankR">
                <img src = {RankRLogo} alt = "RankR Logo"/>
                <h1 className="heading">Your Lists</h1>
            </div>
            <Toolbar className = "toolBar">
                {user?(
                    <div className="profile">
                        <div className = "avatar">{user.result.name.charAr(0)}</div>
                        <h4 className = "userName">{user.result.name}</h4>
                        <Button className = "logout" variant = "contained" color = "secondary">Logout</Button>
                    </div>
                ):(
                    <Button component = {Link} to="/login" variant = "contained" color="primary">Sign in</Button>
                )

                }
            </Toolbar>
        </AppBar>
    )
}
