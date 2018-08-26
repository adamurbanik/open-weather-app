import { Router } from 'express';

import forecast from 'server/routes/forecast';

export default () => {
  const routes = Router();

  routes.use('/forecast', forecast());
  // routes.use('/pressure')

  return routes;
};
