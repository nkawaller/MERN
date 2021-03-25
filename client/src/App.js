import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        disableGutters={true}
      >
        <Navbar />
      </Container>
    </div>
  );
};

export default App;
