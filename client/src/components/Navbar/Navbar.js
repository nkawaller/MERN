import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'
import useStyles from './style'

const Navbar = () => {

const classes = useStyles();
const history = useHistory();
const location = useLocation();
const dispatch = useDispatch();

const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


const logout = () => {
  dispatch({ type: 'LOGOUT'})
  history.push('/')
  setUser(null);
}

useEffect(() => {
  const token = user?.token;

  if(token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
  setUser(JSON.parse(localStorage.getItem('profile')))
}, [location])

  return (
    <AppBar data-testid='navbar' className={classes.appBar} position="static" color="transparent" elevation={0}>
      <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h3" align="left">
          NavBar Component
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
        <div className={classes.profile}>
                          <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
        <Button variant="outlined" className={classes.logout} color="default" onClick={logout}>Log Out</Button>
        </div>
        ) : (
        <Button component={Link} to='/auth' variant="outlined">Log In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
