import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from '../src/Components/LandingPage/LandingPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router >
    <Route exact path = "/">
      <LandingPage/>
    </Route>
  </Router>,
  document.getElementById('root')
);

