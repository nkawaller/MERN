import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from './style';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
      // Add Circular Progress here
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default Posts;
