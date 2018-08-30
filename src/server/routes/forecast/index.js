import { Router } from 'express';

import restClient from 'shared/lib/rest-client';
import renderOnServer from 'server/middleware/render/server';

export default () => {
  const routes = Router();

  routes.get('/client', (req, res, next) => {

    return restClient.get(`samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`)
      .then(({ body }) => res.send(body))
      .catch(err => next(err));
  });

  routes.use(renderOnServer('forecast'));

  return routes;
}
