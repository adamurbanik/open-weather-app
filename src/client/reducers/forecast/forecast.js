import actionTypes from 'client/utils/action-types';

export  default (state = [], {type, data}) => {
  switch (type) {

    case actionTypes.ERROR_FETCHING_FORECAST:
      return data;

    default:
      return state;
  }
};

