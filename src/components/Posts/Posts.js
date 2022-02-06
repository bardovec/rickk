import React from 'react';
import Post from "./Post/Post";

import {useSelector} from "react-redux";
import useStyles from "../../styles";
import {CircularProgress, Grid} from "@material-ui/core";

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();

    return (
        !posts.results ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    posts.results.map((post) => (
                        <Grid key={post.id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        // )
    )
    ) ;
};

export default Posts;
