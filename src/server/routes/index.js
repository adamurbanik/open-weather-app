import { Router } from 'express';

import forecast from 'server/routes/forecast';
import pressure from 'server/routes/pressure';

export default () => {
  const routes = Router();

  routes.use('/forecast', forecast());
  routes.use('/pressure', pressure());

  return routes;
};
