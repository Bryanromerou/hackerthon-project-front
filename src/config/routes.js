import React from 'react';
import Profile from '../pages/Profile';
import PostContainer from '../containers/PostsContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

export default (
  <Router>
    <Switch>
      <Route path='/profile' component={Profile} />
      <Route path="/posts" component={PostContainer} />
    </Switch>
  </Router>
  
)