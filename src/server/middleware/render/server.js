import React from 'react';
import { Provider } from 'react-redux';
import {
  AsyncComponentProvider,
  createAsyncContext
} from 'react-async-component';

import universalLoader from 'server/middleware/universal';
import createAppStore from 'client/store';

import WeatherContainer from 'client/pages/weather-container';
import getForecast from 'client/actions/forecast-actions';

export const resolve = (title, store, history, req, res, next) => {
  try {
    const asyncContext = createAsyncContext();

    const routeMarkup = (
      <AsyncComponentProvider asyncContext={asyncContext}>
        <Provider store={store}>
          <WeatherContainer history={history} />
        </Provider>
      </AsyncComponentProvider>
    );

    universalLoader(routeMarkup, asyncContext, req, res);
  } catch (error) {
    return next(error);
  }
};

const locateResource = (title, req, res, next) => {
  const { store, history } = createAppStore(req.path);

  store
    .dispatch(getForecast())
    .then(() => resolve(title, store, history, req, res, next))
    .catch(() => resolve(title, store, history, req, res, next));
};

export default (title = 'Forecast') => (req, res, next) =>
  locateResource(title, req, res, next);
