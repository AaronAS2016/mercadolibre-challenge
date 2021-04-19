import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "assets/index.scss";
import { Home } from "pages/Home/home";
import { Container } from "layout/container/container";
import { ItemResults } from "~/pages/ItemsResults/itemResults";
import { ItemDescription } from "./pages/ItemDescription/itemDescription";
import { ItemsRouter } from "./pages/ItemsRouter/itemRouter";
import { ItemsProvider } from "./context/items-context";

const Application: React.FC<{}> = () => (
  <ItemsProvider>
    <Container>
      <Router>
        <Home path="/" />
        <ItemsRouter path="/items">
          <ItemResults path="/" />
          <ItemDescription path=":id" />
        </ItemsRouter>
      </Router>
    </Container>
  </ItemsProvider>
);

render(<Application />, document.getElementById("root"));
