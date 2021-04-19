import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "assets/index.scss";
import { Home } from "pages/Home/home";
import { Container } from "layout/container/container";
import { ItemsResults } from "~/pages/ItemsResults/itemsResults";
import { ItemDescription } from "./pages/ItemDescription/itemDescription";
import { ItemsRouter } from "./pages/ItemsRouter/itemRouter";
import { ItemsProvider } from "./context/items-context";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/errorFallback/errorFallback";

const Application: React.FC<{}> = () => (
  <ItemsProvider>
    <Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Home path="/" />
          <ItemsRouter path="/items">
            <ItemsResults path="/" />
            <ItemDescription path=":id" />
          </ItemsRouter>
        </Router>
      </ErrorBoundary>
    </Container>
  </ItemsProvider>
);

render(<Application />, document.getElementById("root"));
