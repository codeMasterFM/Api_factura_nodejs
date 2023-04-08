import { Router } from "express";
import { Delete, get, getId, post, update } from "../Controller/ClientesController.js";

const routes = Router()


routes.post('/Cliente',post)
routes.get('/Cliente',get)
routes.get('/Cliente:id',getId)
routes.delete('/Cliente:id',Delete)
routes.put('/Cliente:id',update)

export default routes