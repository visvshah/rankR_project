
import Reacts from 'react'
import {Card, CardActions, CardContent, Button, Typography, ListSubheader} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons//Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteList, likeList} from '../../../actions/lists.js';
import "./list.scss"

export default function list({list, changeId}){
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const alreadyLiked = list.thumbs.find((thumb) => thumb === user?.result._id);
  const isCreator = user?.result._id === list.creator;
  return (
    <Card className = 'card'>
      {isCreator ? (
        <Button className = 'editButton' size ="small" onClick={() => changeId(list._id)}><MoreHorizIcon fontSize='medium'></MoreHorizIcon></Button>
      ) : null
      }
      <div className='listHeading'>
        <h1>{list.title}</h1>
        <div className = 'holder'>
          <h3 className = 'author'>{list.name}</h3>
          <p className= 'date'>{moment(list.timeStamp).fromNow()}</p>
        </div>
      </div>

      <CardContent>
        {list.content.map((item, num) => (
          <p className = "content">{`${num + 1}) ${item}`}</p>
        ))}
      </CardContent>
      
      <div className='details'>
        <Typography variant = 'body2' color="textSecondary">{list.tags.map((tag) => `#${tag}`)}</Typography>
      </div>

      <CardActions className="listFooting">
        <div className = 'thumbs'>
          <Button size = "small" color="primary" disabled = {!user?.result} onClick={() => dispatch(likeList(list._id))}>
            <ThumbUpAltIcon className = {`thumbsUp ${alreadyLiked ? "active" : ""}`}/>
          </Button>
          <Button size = "small" color="secondary" disabled = {!user?.result} onClick={() => console.log(list._id)}>
            <ThumbDownAltIcon className={`thumbsDown ${alreadyLiked ? "active" : ""}`}/>
          </Button>
          {list.thumbs.length}
        </div>
        {isCreator ? (
          <Button size = "small" color="primary" disabled = {!user?.result} onClick={() => dispatch(deleteList(list._id))}>
            <DeleteIcon/>
          </Button>
        ) : null
        }
        
      </CardActions>

    </Card>
  )
}
