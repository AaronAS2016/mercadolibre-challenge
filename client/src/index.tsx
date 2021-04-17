import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "assets/index.scss";
import { Home } from "pages/Home/home";
import { Container } from "layout/container/container";
import { ResultsItem } from "pages/ResultsItem/results";

const Application: React.FC<{}> = () => (
  <Container>
    <Router>
      <Home path="/" />
      <ResultsItem path="/items" />
    </Router>
  </Container>
);

render(<Application />, document.getElementById("root"));
