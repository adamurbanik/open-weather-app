import React from 'react';
import { connect } from 'react-redux';
// import { update as updateAction } from '../dummy-feature/actions';

let Page1 = () => (
  <div>
    Adam
  </div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

Page1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);

export default Page1;
