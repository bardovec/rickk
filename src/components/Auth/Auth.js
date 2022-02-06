import React from 'react';
import useStyles from './styles'
import { Avatar, Container, Paper, Typography, Button } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'





const Auth = () => {
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{'Sign up'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                         Sign In
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
