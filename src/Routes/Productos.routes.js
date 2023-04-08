import { Router } from "express";
import { get, post ,update} from "../Controller/ProductosController.js";

const routes = Router()


routes.post('/Productos',post)
routes.get('/Productos',get)
routes.put('/Productos',update)


export default routes