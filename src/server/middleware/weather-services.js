import restClient from 'shared/lib/rest-client';
import config from 'server/config';

export default () => (req, res, next) => {

  const {
    cityName
  } = req.query;

  return restClient.get(`${config.OPEN_WEATHER_MAP_HOST}/data/2.5/forecast?q=${cityName}&appid=${config.APPID}`)
    .then(({ body }) => {

      req.locals = body;
      next();
    })
    .catch(err => {

      console.error(err);
      next(err);
    })
};
