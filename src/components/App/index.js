import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/home'
import Category from '../../pages/category'
import Search from '../../pages/search'
import Navbar from '../Navbar'

const App = props => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:slug" component={Category} />
        <Route path="/search/:slug" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
