import express from "express";
import ClientesRoutes from "./Routes/Clientes.routes.js";
import ProductosRoute from "./Routes/Productos.routes.js"
import FacturaRotes from './Routes/Factura.routes.js'
import FacturaProducto from './Routes/producto_factura.routes.js'

const app = express();
console.log("hola")
app.use(express.json())
app.use(ClientesRoutes)
app.use(ProductosRoute)
app.use(FacturaRotes)
app.use(FacturaProducto)

app.use((req,res,next)=>{
    res.status(404).json({
        Message:"End point not found"
    })
})
export default app