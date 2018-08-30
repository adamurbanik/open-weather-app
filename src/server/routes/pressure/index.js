import { Router } from 'express';

import getForecastData from 'server/middleware/weather-services';
import { calculateAverage } from 'server/middleware/utils';

export default () => {
  const routes = Router();

  routes.get('/', getForecastData(), calculateAverage());

  return routes;
}
