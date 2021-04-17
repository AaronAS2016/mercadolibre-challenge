import React from 'react';
import { render } from 'react-dom';
import { Router } from "@reach/router"
import 'assets/index.scss';
import { Home } from 'pages/Home/home';
  
const Application: React.FC<{}> = () => (
  <Router>
      <Home path="/" />
  </Router>
);

render(<Application />, document.getElementById('root'));