import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <Container maxWidth="lg" disableGutters={true}>
        <Navbar />
        <Home />
      </Container>
    </div>
  );
};

export default App;
