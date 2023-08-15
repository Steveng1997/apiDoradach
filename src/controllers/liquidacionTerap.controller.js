const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO liquidacionesTerapeuta SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "Liquidacion terapeuta Saved" });
  });
};

// Consultamos

exports.getLiquidacionesTerapeuta = (req, res) => {

  const sql = "SELECT * FROM liquidacionesTerapeuta ORDER BY currentDate desc";
  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdTerap = (req, res) => {
  const { idTerapeuta } = req.params;

  const sql = "SELECT * FROM liquidacionesTerapeuta WHERE idTerapeuta = ?";

  pool.query(sql, [idTerapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Actualizamos

exports.update = (req, res) => {
  const { terapeuta } = req.params;
  const { idTerapeuta } = req.body;

  const sql = "UPDATE liquidacionesTerapeuta SET idTerapeuta = ? WHERE terapeuta = ?";

  pool.query(sql, [idTerapeuta, terapeuta], () => {
    res.json({ message: "The liquidacion terapeuta was Updated" });
  });
};

exports.updateByIdImporte = (req, res) => {
  const { idTerapeuta } = req.params;
  const { importe } = req.body;

  const sql =
    "UPDATE liquidacionesTerapeuta SET importe = ? WHERE idTerapeuta = ?";

  pool.query(sql, [importe, idTerapeuta], () => {
    res.json({ message: "The liquidacion terapeuta was Updated" });
  });
};