import { Router } from 'express';

import forecast from 'server/routes/forecast';

export default () => {
  const routes = Router();

  console.log('forecast route');

  routes.use('/forecast', forecast());
  // routes.use('/pressure')

  return routes;
};


// let express = require('express');
// let routes = express.Router();
// let forecast = require('./forecast/index');
//
//
// module.exports = () => { console.log('/forecast route')
//
//   routes.use('/forecast', forecast());
//
//   // routes.use('/forecast', (req, res, next) => res.send('forecast route'));
//   return routes;
// };

