const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO terapeuta SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "terapeuta Saved" });
  });
};

// Consultamos

exports.getByIdTerapeuta = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM terapeuta WHERE id = ?";
  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByNombre = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM terapeuta WHERE nombre = ?";

  pool.query(sql, [nombre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getAllTerapeuta = (req, res) => {
  const sql = "SELECT * FROM terapeuta ORDER BY id asc;";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getAllTerapeutaByOrden = (req, res) => {
  const sql = "SELECT * FROM terapeuta ORDER BY horaEnd desc;";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Actualizamos

exports.updateTerapeutas = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE terapeuta SET ? WHERE id = ?";

  pool.query(sql, [req.body, id], () => {
    res.json({ message: "The terapeuta was Updated" });
  });
};

exports.updateBy3Item = (req, res) => {
  const { nombre } = req.params;
  const { horaEnd, salida, fechaEnd } = req.body;

  const sql =
    "UPDATE terapeuta SET horaEnd = ?, salida = ?, fechaEnd = ? WHERE nombre = ?";

  pool.query(sql, [horaEnd, salida, fechaEnd, nombre], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

exports.updateHoraAndSalida = (req, res) => {
  const { nombre } = req.params;
  const { horaEnd = "", salida = "", fechaEnd = "", minuto = "" } = req.body;

  const sql =
    "UPDATE terapeuta SET horaEnd = ?, salida = ?, fechaEnd = ?, minuto = ? WHERE nombre = ?";

  pool.query(sql, [horaEnd, salida, fechaEnd, minuto, nombre], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

exports.updateMinutoByNombre = (req, res) => {
  const { nombre } = req.params;
  const { minuto } = req.body;

  const sql =
    "UPDATE terapeuta SET minuto = ? WHERE nombre = ?";

  pool.query(sql, [minuto, nombre], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

// Eliminamos

exports.deleteTerapeutas = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM terapeuta WHERE id = ?";

  pool.query(sql, ID, (err, result, fields) => {
    res.json({ message: "The terapeuta was deleted" });
  });
};
