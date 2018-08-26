import * as React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import { asyncComponent } from 'react-async-component';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

const Page1 = asyncComponent({
    resolve: () => import('client/pages/weather-container')
});

let App = (props) => (
  <BrowserRouter>
  <div>
    <Route exact path="/weather/forecast" component={Page1} />
  </div>
  </BrowserRouter>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default App;
