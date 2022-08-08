import React, {useState, useEffect} from 'react'
import {Container, Grow, Grid, Button} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import Form from "../Forms/forms.jsx"
import Lists from "../Lists/lists.jsx"
import { useDispatch } from 'react-redux'
import {getLists} from '../../actions/lists.js'
import "./home.scss"

export default function home() {
    const [currentId, changeId] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists());
    },[currentId, dispatch])
    const openForm = () =>{
        setShowForm(!showForm);
    }
    return (
        <Grow in>
            <Container className ="content">
                <Grid className = "contentGrid" container spacing={3}>
                    <Grid className = "openForm" xs={12} sm={10}>
                        <Button className = "button" onClick = {openForm}>
                        {
                            !showForm ? (
                                <>
                                    <CreateIcon/>
                                    <h2>Create a List!</h2>
                                </>
                            ): (
                                <>
                                    <HomeIcon/>
                                    <h2>Home</h2>
                                </>
                            )
                        }
                        </Button>
                    </Grid>
                    {
                        !showForm && (
                            <Grid className="Posts" item xs={12} sm={10}>
                                <Lists changeId = {changeId} openForm = {openForm}/>
                            </Grid>
                        )
                    }
                    {
                        showForm && (
                            <Grid className="Form" item xs={12} sm={10}>
                                <Form currentId = {currentId} changeId = {changeId} openForm = {openForm}/>
                            </Grid>
                        )
                    }
                    
                </Grid>
            </Container>
        </Grow>
    )
}
