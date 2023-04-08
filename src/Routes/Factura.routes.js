import { Router } from "express";
import { Delete, get, getId, post } from "../Controller/FacturaController.js";

const routes = Router()


routes.post('/Factura',post)
routes.get('/Factura',get)
routes.get('/Factura:id',getId)
routes.delete('/Factura:id',Delete)

export default routes