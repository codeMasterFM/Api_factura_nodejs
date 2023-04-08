import { Router } from "express";
import { Delete, get, getId, post,GetJoinFactura_FacturaProducto } from "../Controller/producto_facturaController.js";

const routes = Router()

routes.post('/productoFactura',post)
routes.get('/productoFacturaDetail',GetJoinFactura_FacturaProducto)
routes.get('/productoFactura',get)
routes.get('/productoFactura:id',getId)
routes.delete('/productoFactura:id',Delete)
export default routes