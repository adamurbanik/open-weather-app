import * as React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import { asyncComponent } from 'react-async-component';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

const Page1 = asyncComponent({
    resolve: () => import('./pages/page1')
});

let App = (props) => (
  <BrowserRouter>
  <div>
    <Route exact path="/page1" component={Page1} />
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
