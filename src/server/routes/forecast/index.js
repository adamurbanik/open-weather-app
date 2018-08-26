import { Router } from 'express';
import renderOnServer from 'server/middleware/render/server';

export default () => {
  const routes = Router();

  console.log('weather routes');

  routes.use(renderOnServer('forecast'));

  return routes;
}



// let express = require('express');
// let routes = express.Router();
// let renderOnServer = require('../../middleware/render/server');
//
//
//
//
// module.exports = () => { console.log('/forecast route');
//
//   routes.use(renderOnServer('forecast'));
//
//   // routes.use('/forecast', (req, res, next) => res.send('forecast route'));
//   return routes;
// };
