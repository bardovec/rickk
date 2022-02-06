import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress, List,
  ListItem,
  Typography,
} from '@material-ui/core';

import { useHistory, useParams } from 'react-router-dom';
import useStyles from './styles';
import { fetchById } from '../../../actions/posts';

const PostDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postById);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchById(params.id));
  }, []);

  return (
    !post.name ? <CircularProgress /> : (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.image} title={post.name} />
        <div className={classes.overlay2} />
        <Typography className={classes.title} variant='h5' gutterBottom>{post.name}</Typography>
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Gender:
            {' '}
            {post.gender}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Species:
            {' '}
            {post.species}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Location:
            {' '}
            {post.location.name}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Status:
            {' '}
            {post.status}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Created:
            {' '}
            {post.created}
          </Typography>
          <List>
            {post.episode.map((item) => (
              <ListItem>{item.substring(32)}</ListItem>
            ))}
          </List>

        </CardContent>
        <CardActions className={classes.cardActions}>

          <Button
            size='small'
            color='primary'
            onClick={() => {
              history.push('/');
            }}
          >
            Go back
          </Button>
        </CardActions>

      </Card>

    ));
};

export default PostDetails;
