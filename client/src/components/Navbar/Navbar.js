import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent">
      <div>
        <Typography variant="h3" align="left">
          NavBar Component
        </Typography>
      </div>
      <Toolbar>
        <Typography variant="subtitle1">UserName</Typography>
        <Button variant="outlined">Button Component</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
