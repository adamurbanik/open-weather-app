import React from 'react';
import { connect } from 'react-redux';
// import { update as updateAction } from '../dummy-feature/actions';

let weatherContainer = () => (
  <div>
    Adam
  </div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

weatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(weatherContainer);

export default weatherContainer;
