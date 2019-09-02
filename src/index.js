import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

function App() {
  return (
    <AppContainer className="App">
      <GreetingMsg>Hello CodeSandbox</GreetingMsg>
      <ExcerptMsg>Start editing to see some magic happen!</ExcerptMsg>
    </AppContainer>
  );
}

const AppContainer = styled.div`

`

const GreetingMsg = styled.h1`
`

const ExcerptMsg = styled.h2`
  color: blue;
`

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
