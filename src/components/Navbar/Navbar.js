import React from 'react';
import {
  AppBar, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const Navbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography onClick={() => dispatch(getPosts())} component={Link} to='/' className={classes.heading} variant='h2' align='center'>
          Rick And
          Morty
        </Typography>
        <img className={classes.image} src={logo} alt='logo' height='60' />

      </div>
    </AppBar>
  );
};

export default Navbar;
