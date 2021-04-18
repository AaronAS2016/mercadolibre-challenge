import { Router } from "express";
import { getItems, getItem } from "../controllers/items";

const itemsRouter = Router();

itemsRouter.get("/", async (req, res) => {
  try { 
    const query = String(req.query.q);
    const limit = typeof req.query.limit === "string" ? req.query.limit : undefined;
    const items = await getItems(query, limit);
    return res.status(200).send( items )
  }catch (error) {
    res.status(500).send({ error: error });
  }
});


itemsRouter.get("/api/items/:id",  async (req, res) => {
    const id = req.params.id;
    try { 
      const item = await getItem(id);
      return res.status(200).send(item);
    }catch (error) {
      res.status(500).send({ error: error });
    }
})

export default itemsRouter;
