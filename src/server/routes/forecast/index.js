import { Router } from 'express';
import renderOnServer from 'server/middleware/render/server';

export default () => {
  const routes = Router();

  routes.use(renderOnServer('forecast'));

  return routes;
}
