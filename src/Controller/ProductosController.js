import { pool } from "../../DB/Database.js";

export const get = async(req,res) => {
    const [result] = await pool.query("SELECT * from Productos");
    return res.json(result);
}
export const post = async(req,res) => {
    const {NOMBRE,PRECIO,CANTIDAD_EXISTENTE} = req.body
    const result = await pool.query("INSERT INTO Productos (NOMBRE,PRECIO,CANTIDAD_EXISTENTE) VALUES (?,?,?)",
    [NOMBRE,PRECIO,CANTIDAD_EXISTENTE])
  
    console.log(req.body)
   return res.send(result.insertId)
}

export const update = async (req, res) => {
    const { NOMBRE,PRECIO,CANTIDAD_EXISTENTE} = req.body;
    const ID = req.params.id;
    console.log(ID);
    try {
      const result = await pool.query(
        "update Productos SET NOMBRE = IFNULL(?,NOMBRE), PRECIO = IFNULL(?,PRECIO) PRECIO = IFNULL(?,CANTIDAD_EXISTENTE) WHERE IDProductos = ?",
        [NOMBRE,PRECIO,CANTIDAD_EXISTENTE, ID]
      );
      return res.json(result[0]);
    } catch (error) {
      return res.json({
        Message: "ERROR",
      });
    }
  };