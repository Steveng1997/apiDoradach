const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO liquidacionesEncargada SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "Liquidacion encargada Saved" });
  });
};

// Consultamos

exports.getLiquidacionesEncargada = (req, res) => {

  const sql = "SELECT * FROM liquidacionesEncargada ORDER BY currentDate desc";
  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdEncarg = (req, res) => {
  const { idEncargada } = req.params;

  const sql = "SELECT * FROM liquidacionesEncargada WHERE idEncargada = ?";

  pool.query(sql, [idEncargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Actualizamos

exports.update = (req, res) => {
  const { encargada } = req.params;
  const { idEncargada } = req.body;

  const sql = "UPDATE liquidacionesTerapeuta SET idEncargada = ? WHERE encargada = ?";

  pool.query(sql, [idEncargada, encargada], () => {
    res.json({ message: "The terapeuta was Updated" });
  });
};

exports.updateByIdImporte = (req, res) => {
  const { idEncargada } = req.params;
  const { importe } = req.body;

  const sql =
    "UPDATE liquidacionesTerapeuta SET importe = ? WHERE idEncargada = ?";

  pool.query(sql, [importe, idEncargada], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

exports.updateEncargadaImporteById = (req, res) => {
  const id = req.params.id;
  const { importe } = req.body;

  const sql = "UPDATE liquidacionesTerapeuta SET importe = ? WHERE id = ?";

  pool.query(sql, [importe, id], () => {
    res.json({ message: "The encargada was Updated" });
  });
};
