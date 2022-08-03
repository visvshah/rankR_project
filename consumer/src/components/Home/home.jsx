import React, {useState, useEffect} from 'react'
import {Container, Grow, Grid} from '@material-ui/core'
import Form from "../Forms/forms.jsx"
import Lists from "../Lists/lists.jsx"
import { useDispatch } from 'react-redux'
import {getLists} from '../../actions/lists.js'

export default function home() {
    const [currentId, changeId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists());
    },[currentId, dispatch])
  
    return (
        <Grow in>
            <Container className ="Content">
                <Grid container justifyContent = "space-between" alignItems = "stretch" spacing={3}>
                    <Grid className="Posts" item xs={12} sm={7}>
                        <Lists changeId = {changeId}/>
                    </Grid>
                    <Grid className="Form" item xs={12} sm={4}>
                        <Form currentId = {currentId} changeId = {changeId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}
