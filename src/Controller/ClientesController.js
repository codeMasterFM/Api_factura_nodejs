import { pool } from "../../DB/Database.js";

export const get = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * from Cliente");
    return res.json(result);
  } catch (error) {
    res.json({
      Message: "ERROR",
    });
  }
};
export const post = async (req, res) => {
  const { NOMBRE } = req.body;
  try {
    const result = await pool.query("INSERT INTO Cliente (NOMBRE) VALUES (?)", [
      NOMBRE,
    ]);
    console.log(req.body);
    return res.send(result.insertId);
  } catch (error) {
    return res.json({
      Message: "ERROR",
    });
  }
};

export const update = async (req, res) => {
  const { NOMBRE } = req.body;
  const ID = req.params.id;
  console.log(ID);
  try {
    const result = await pool.query(
      "update Cliente SET NOMBRE = IFNULL(?,NOMBRE) WHERE IDClientes = ?",
      [NOMBRE, ID]
    );
    return res.json(result[0]);
  } catch (error) {
    return res.json({
      Message: "ERROR",
    });
  }
};

export const Delete = async (req, res) => {
  const id = req.params.id;
  try {
  } catch (error) {}
  const [result] = await pool.query(
    "DELETE from Cliente WHERE IDClientes = ?",
    [id]
  );
  if (result.length > 0) {
    return res.json(result);
  }
  return res.status(404).json({
    message: "Cliente not fund",
  });
};

export const getId = async (req, res) => {
  const id = req.params.id;
  const [result] = await pool.query(
    "SELECT * from Cliente WHERE IDClientes = ?",
    [id]
  );
  if (result.length > 0) {
    return res.json(result);
  }
  return res.status(404).json({
    message: "Cliente not fund",
  });
};
