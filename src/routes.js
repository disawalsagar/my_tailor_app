import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Shirt from './shirt/shirt';
import Pant from './Pant/Pant';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/shirt" component={Shirt}/>
      <Route exact path="/pant" component={Pant}/>
    </Router>
);

export default createRoutes;