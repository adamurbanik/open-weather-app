import { createStore, applyMiddleware, compose } from 'redux';
import createMemoryHistory from 'history/createMemoryHistory';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

const createAppStore = (path = '/') => {
  const initialState = {};

  let history = createMemoryHistory({initialEntries: [path]});
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    history = createHistory({ basename: '' });
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(reducers, initialState, composedEnhancers);

  return {
    history,
    store
  }
};

export default createAppStore;

