import React from "react";
import { StyledApp } from "./styled";

import Canvas from "../Canvas";
function App() {
  return (
    <StyledApp className="App">
      <h1>It's my PING-PONG game</h1>
      <Canvas />
    </StyledApp>
  );
}

export default App;
