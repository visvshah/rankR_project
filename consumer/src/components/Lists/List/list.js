import { formatMs } from '@material-ui/core'
import React from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons//Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import "./list.scss"
export default function list({list}){
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
        <Typography className = "title" variant = 'body2' gutterBottom>{list.content.map((item, num) => `\n${num + 1}.) ${item}`)}</Typography>
      </CardContent>
      <div className='listMiddle'>
        <Button className = 'optionsButton' size ="small" onClick={() => {}}>
          <MoreHorizIcon fontSize='default'></MoreHorizIcon>
        </Button>
      </div>
      <div className='details'>
        <Typography variant = 'body2' color="textSecondary">{list.tags.map((tag) => `#${tag}`)}</Typography>
      </div>
      <CardActions className="listFooting">
        <div className = 'thumbs'>
          <Button size = "small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon/>
          </Button>
          <Button size = "small" color="primary" onClick={() => {}}>
            <ThumbDownAltIcon/>
          </Button>
          {list.thumbs}
        </div>
        <Button size = "small" color="primary" onClick={() => {}}>
          <DeleteIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
