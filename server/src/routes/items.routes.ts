import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', (request, response) => {
  return response.json("OK");
});

export default itemsRouter;