import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { TweenMax, Power3 } from "gsap";
import useStyles from "./style";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    (currentId ? state.posts.find((message) => message._id === currentId) : null
  ));
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const postForm = useRef(null);
  const pleaseSignIn = useRef(null);

  useEffect(() => {
    TweenMax.to(postForm.current, 2, {
      opacity: 1,
      x: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(pleaseSignIn.current, 2, {
      opacity: 1,
      x: -20,
      ease: Power3.easeOut,
    });
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  if (!user?.result?.name) {
    return (
      <Paper ref={pleaseSignIn} className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to share photos
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper ref={postForm} className={classes.paper} elevation={5}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {currentId ? `Editing "${post.title}"` : "Add an image"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="outlined"
          color="default"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
