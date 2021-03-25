import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from './style'

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="fixed" color="transparent" elevation={0}>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h3" align="left">
          NavBar Component
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
        <Typography className={classes.userName} variant="subtitle1">UserName</Typography>
        </div>
        <Button variant="outlined">Log In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
