import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

export const App = () => (
  <Router>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Route>
  </Router>
);
