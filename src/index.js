import asyncBootstrapper from 'react-async-bootstrapper';
import { AsyncComponentProvider } from 'react-async-component';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import index from 'client/index.css';
import App from 'client/App';
import { unregister } from 'client/registerServiceWorker';
import createAppStore from 'client/store';

const rehydrateState = window.ASYNC_COMPONENTS_STATE;

const {store, history} = createAppStore();

const app = (
  <AsyncComponentProvider rehydrateState={rehydrateState}>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
  unregister();
});
