import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <Post />
    </div>
  );
};

export default Posts;
