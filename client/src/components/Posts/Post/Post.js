import React, { useRef, useEffect } from "react";
import { useIntersection } from 'react-use'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { gsap, TweenMax, Power3 } from "gsap";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./style";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  let card = useRef(null);

  const intersection = useIntersection(card, {
    root: null,
    rootMargin: '0px',
    threshold: .2
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  }

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out'
    })
  }
  intersection && intersection.intersectionRatio < .2 ?
  // Not reached
  fadeOut(".fadeIn")
  : fadeIn(".fadeIn") // Reached, so animate

  useEffect(() => {
    TweenMax.to(card.current, 2, {
      opacity: 1,
      x: 20,
      ease: Power3.easeOut,
    });
  });

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FavoriteIcon className={classes.heart} fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteIcon className={classes.heart} fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon className={classes.heart} fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card ref={card} className={classes.card} elevation={5}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      {(user?.result.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.nameTags}>
        <Typography variant="body1" color="textPrimary">
          {post.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <div className={classes.date}>
        <Typography variant="caption" color="textSecondary">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h4"
        color="textPrimary"
        component="p"
      >
        {post.title}
      </Typography>
      <CardContent className={classes.message}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="default"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="default"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
