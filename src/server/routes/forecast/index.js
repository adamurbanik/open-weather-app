import { Router } from 'express';

import config from 'server/config';

import restClient from 'shared/lib/rest-client';
import renderOnServer from 'server/middleware/render/server';

export default () => {
  const routes = Router();

  routes.get('/client', (req, res, next) => {

    const {
      cityName
    } = req.query;

    return restClient.get(`${config.OPEN_WEATHER_MAP_HOST}/data/2.5/weather?q=${cityName}&appid=${config.APPID}`)
      .then(({ body }) => res.send(body))
      .catch(err => {

        console.error(err);
        next(err);
      })
  });

  routes.use(renderOnServer('forecast'));

  return routes;
}
