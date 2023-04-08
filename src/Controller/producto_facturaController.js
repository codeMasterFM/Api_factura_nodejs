import { pool } from "../../DB/Database.js";

export const get = async(req,res) => {
    const [result] = await pool.query("SELECT * from producto_factura");
    return res.json(result);
}
export const post = async(req,res) => {
    const {IDProductos,IDFactura} = req.body
    const result = await pool.query("INSERT INTO producto_factura (IDProductos,IDFactura) VALUES (?,?)",[IDProductos,IDFactura])
    console.log(req.body)
   return res.send(result.insertId)
}
export const getId = async(req,res) => {
    const id  = req.params.id;
    const [result] = await pool.query('SELECT * from producto_factura WHERE IDClientes = ?',[id]);
    if (result.length > 0) {
    return res.json(result);
    }
    return res.status(404).json({
        message: 'Cliente not fund'
    });
}

export const Delete = async(req,res) => {
    const id  = req.params.id;
    const [result] = await pool.query('DELETE from producto_factura WHERE IDClientes = ?',[id]);
    if (result.length > 0) {
    return res.json(result);
    }
    return res.status(404).json({
        message: 'Cliente not fund'
    });
}

export const GetJoinFactura_FacturaProducto = async(req,res) => {
   const result = await pool.query('select * from producto_factura inner join productos on producto_factura.IDProductos = productos.IDProductos') 
  res.json(result[0]);
}