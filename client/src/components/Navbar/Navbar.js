import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { TweenMax, Power3 } from "gsap";
import decode from "jwt-decode";
import useStyles from "./style";

const Navbar = () => {
  let headingItem = useRef(null);
  let signInButton = useRef(null);
  let signOutButton = useRef(null);

  useEffect(() => {
    TweenMax.to(headingItem.current, 2, {
      opacity: 1,
      x: 20,
      ease: Power3.easeOut,
    });
    TweenMax.to(signInButton.current, 2, {
      opacity: 1,
      x: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(signOutButton.current, 2, {
      opacity: 1,
      x: -20,
      ease: Power3.easeOut,
    });
  }, []);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar
      data-testid="navbar"
      className={classes.appBar}
      position="static"
      color="transparent"
      elevation={0}
    >
      <div className={classes.brandContainer}>
        <Typography
          ref={headingItem}
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="left"
        >
          Image Gallery
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              ref={signOutButton}
              variant="outlined"
              className={classes.logout}
              color="default"
              onClick={logout}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            ref={signInButton}
            className={classes.button}
            component={Link}
            to="/auth"
            variant="outlined"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
