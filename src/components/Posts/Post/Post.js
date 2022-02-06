import React, {useState} from 'react';
import useStyles from './styles'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import {useDispatch} from "react-redux";

import { fetchById } from "../../../actions/posts";
import {useHistory} from "react-router-dom";




const Post = ({post, setCurrentId}) => {
    const [count , setCount] = useState(0)
    const history = useHistory()
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.image} title={post.name}/>
            <div className={classes.overlay2}>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.name}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p' gutterBottom>{post.status}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => { count ? setCount(count - 1) : setCount(count + 1)

                }}>
                    <ThumbUpAltIcon fontSize='small'/>
                    &nbsp; Like &nbsp;
                    {count}
                </Button>
                <Button size='small' color='primary' onClick={() => {
                    dispatch(fetchById(post.id))
                    history.push(`/details/${post.id}`)

                }}>
                    Details
                </Button>
            </CardActions>

        </Card>
    );
};

export default Post;
