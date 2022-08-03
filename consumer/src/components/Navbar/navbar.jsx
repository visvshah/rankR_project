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
            
        </AppBar>
    )
}
