import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Grow, TextField,
} from '@material-ui/core';
import { Pagination } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import Posts from '../Posts/Posts';
import useStyles from '../../styles';

import { filterName, getPosts } from '../../actions/posts';

const Home = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState([]);
  const [load, setLoad] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const pages = useSelector((state) => state.posts.info);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [load]);

  useEffect(() => {
    dispatch(filterName(page, name));
  }, [name, page]);

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <TextField placeholder='Input name' style={{ backgroundColor: 'white' }} variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
        <Grid
          container
          className={classes.mainContainer}
          justifyContent='center'
          alignItems='center'
          spacing={8}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>

        </Grid>

        {pages ? <Pagination defaultPage={1} color='primary' onChange={(e) => handleChange(e.target.textContent)} size='large' count={pages.pages} variant='outlined' /> : null }
      </Container>
    </Grow>
  );
};

export default Home;
