import { SERVER_ERROR_STATUS } from './../constant/http_status_codes';
import { Router } from "express";
import { OK_STATUS } from "../constant/http_status_codes";
import { getItems, getItem } from "../controllers/items";

const itemsRouter = Router();

itemsRouter.get("/", async (req, res) => {
  try { 
    const query = String(req.query.q);
    const limit = typeof req.query.limit === "string" ? req.query.limit : undefined;
    const items = await getItems(query, limit);
    return res.status(OK_STATUS).send( items )
  }catch (error) {
    res.status(SERVER_ERROR_STATUS).send({ error: error });
  }
});


itemsRouter.get("/api/items/:id",  async (req, res) => {
    const id = req.params.id;
    try { 
      const item = await getItem(id);
      return res.status(OK_STATUS).send(item);
    }catch (error) {
      res.status(SERVER_ERROR_STATUS).send({ error: error });
    }
})

export default itemsRouter;
