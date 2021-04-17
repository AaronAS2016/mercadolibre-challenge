import { Router } from 'express';
import itemsRouter from './items.routes';

const routes = Router();

routes.use('/', itemsRouter);

export default routes;