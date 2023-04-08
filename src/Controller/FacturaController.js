import { pool } from "../../DB/Database.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from factura");
    return res.json(result);
  } catch (error) {
    return res.json({
        Message:"ERROR"
    });

  }
};
export const post = async (req, res) => {
  const fecha = Date();
  const { IDClientes, SUBTOTAL, TOTAL, estado } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO factura (IDClientes,SUBTOTAL,TOTAL,estado) VALUES (?,?,?,?)",
      [IDClientes, SUBTOTAL, TOTAL, estado]
    );
    console.log(req.body);
    return res.send(result.insertId);
  } catch (error) {
    return res.json({
      Message: "ERROR",
    });
  }
};
export const getId = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query(
      "SELECT * from factura WHERE IDFactura = ?",
      [id]
    );
    if (result.length > 0) {
      return res.json(result);
    }
    return res.status(404).json({
      message: "factura not fund",
    });
  } catch (error) {
    return res.json({
      Mesagge:"ERROR"
    })
  }

};

export const Delete = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query("DELETE from factura WHERE IDFactura = ?", [
      id,
    ]);
    if (result.length > 0) {
      return res.json(result);
    }
    return res.status(404).json({
      message: "factura not fund",
    });
  } catch (error) {
    return res.json({
      Messge:"ERROR"
    });
  }
  
};
