import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Recite from './components/Recite';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Navbar from './components/Navbar';
import Badge from 'material-ui/Badge';
import Register from './components/Main';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
      <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Register} />
              <Route exact path="/recite" component={Recite} />
            </Switch>
        </Fragment>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
