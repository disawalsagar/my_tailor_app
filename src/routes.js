import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shirt from './shirt/shirt';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/shirt" component={Shirt}/>
    </Router>
);

export default createRoutes;