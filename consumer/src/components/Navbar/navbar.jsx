import React, {useState, useEffect} from "react";
import {AppBar, Button, Toolbar, Avatar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import {Link, useHistory, useLocation} from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const logOut = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/auth");
        setUser(null);
    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        }, [location]);
    return (
        <div className ="navBar" position="static" color="inherit">
            <div className = "rankR">
                <h1 className="heading">RankR: Share your favorites</h1>
            </div>
            <div className = "toolBar">
                {user?(
                    <div className="profile">
                        <Avatar className = "avatar">{user?.result.name.charAt(0)}</Avatar>
                        <h4 className = "userName">{user?.result.name}</h4>
                        <Button className = "logout" onClick= {logOut} variant = "contained" color = "secondary">Logout</Button>
                    </div>
                ):(
                    <Button component = {Link} to="/auth" variant = "contained" color="primary">Sign in</Button>
                )

                }
            </div>
        </div>
    )
}
