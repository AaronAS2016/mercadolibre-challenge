import { Router } from "express";
import { getItems } from "../controllers/items";

const itemsRouter = Router();

itemsRouter.get("/", async (request, response) => {
  try { 
    const query = String(request.query.q);
    const res = await getItems(query);
    return response.status(200).send({ res })
  }catch (error) {
    console.log(error);
    response.send({ error: error });
  }
});

export default itemsRouter;
