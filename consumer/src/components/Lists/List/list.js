
import Reacts from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons//Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteList, likeList} from '../../../actions/lists';
import "./list.scss"

export default function list({list, changeId}){
  const dispatch = useDispatch();
  return (
    <Card className = 'card'>
      <div className='listHeading'>
        <Typography variant = 'h4'>{list.title}</Typography>
        <div className = 'holder'>
          <Typography className = 'author' variant = 'h6'>{list.author}</Typography>
          <Typography className= 'date' variant="body2">{moment(list.timeStamp).fromNow()}</Typography>
        </div>
      </div>
      <CardContent>
        {list.content.map((item, num) => (
          <Typography className = "title" variant = 'body2' gutterBottom>{`${num + 1}.) ${item}`}</Typography>
        ))}
      </CardContent>
      <div className='listMiddle'>
        <Button className = 'optionsButton' size ="small" onClick={() => changeId(list._id)}>
          <MoreHorizIcon fontSize='medium'></MoreHorizIcon>
        </Button>
      </div>
      <div className='details'>
        <Typography variant = 'body2' color="textSecondary">{list.tags.map((tag) => `#${tag}`)}</Typography>
      </div>
      <CardActions className="listFooting">
        <div className = 'thumbs'>
          <Button size = "small" color="primary" onClick={() => dispatch(likeList(list._id))}>
            <ThumbUpAltIcon/>
          </Button>
          <Button size = "small" color="primary" onClick={() => console.log(list._id)}>
            <ThumbDownAltIcon/>
          </Button>
          {list.thumbs}
        </div>
        <Button size = "small" color="primary" onClick={() => dispatch(deleteList(list._id))}>
          <DeleteIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
