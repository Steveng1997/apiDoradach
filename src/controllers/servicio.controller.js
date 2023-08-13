const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO servicio SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "encargada Saved" });
  });
};

// Consultamos

exports.getByCurrentDesc = (req, res) => {
  const sql = 'SELECT * FROM servicio WHERE cierre = "1" ORDER BY id desc';
  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTerapeutaAndEncargada = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByCierre = (req, res) => {
  const { encargada } = req.params;

  const sql = 'SELECT * FROM servicio WHERE encargada = ? AND cierre = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getServicio = (req, res) => {
  const sql =
    "SELECT * FROM servicio ORDER BY currentDate desc, horaStart desc";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByLiquidEncargadaFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE liquidadoEncargada = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByLiquidTerapFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE liquidadoTerapeuta = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByLiquidTerapTrue = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE liquidadoTerapeuta = "1" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdTerap = (req, res) => {
  const { idTerapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE idTerapeuta = ?";

  pool.query(sql, [idTerapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdCierre = (req, res) => {
  const { idCierre } = req.params;

  const sql = "SELECT * FROM servicio WHERE idCierre = ?";

  pool.query(sql, [idCierre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdEncarg = (req, res) => {
  const { idEncargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE idEncargada = ?";

  pool.query(sql, [idEncargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.geyByCierreFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE cierre = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM servicio WHERE id = ?";

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEditar = (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM servicio WHERE id = ? AND editar = "1"';

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaByAsc = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY id asc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaByDesc = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY id desc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeuta = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ?";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdDocument = (req, res) => {
  const { idUnico } = req.params;

  const sql = "SELECT * FROM servicio WHERE idUnico = ?";

  pool.query(sql, [idUnico], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ?";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaEncargada = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaAndLiquidacion = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaTerap = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidada = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaByFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY fechaHoyInicio desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapNoLiquidadaByFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0" ORDER BY fechaHoyInicio desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaByFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY fechaHoyInicio asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapNoLiquidadaByFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0" ORDER BY fechaHoyInicio asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoCierre = (req, res) => {
  const { encargada } = req.params;

  const sql = 'SELECT * FROM servicio WHERE encargada = ? AND cierre = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaAsc = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0" ORDER BY currentDate asc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaAscByLiqTrue = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "1" ORDER BY currentDate asc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaAscByLiqTrue = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "1" ORDER BY currentDate asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY currentDate asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaDesc = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0" ORDER BY currentDate desc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaDescByLiqTrue = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "1" ORDER BY currentDate desc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaDescByLiqTrue = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "1" ORDER BY currentDate desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaWithCurrentDate = (req, res) => {
  const { terapeuta } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY currentDate desc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = '0' ORDER BY currentDate desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? ORDER BY id asc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? ORDER BY id desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getFechaHoy = (req, res) => {
  const { fechaHoyInicio } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE fechaHoyInicio = ? ORDER BY currentDate desc";

  pool.query(sql, [fechaHoyInicio], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getFechaHoy = (req, res) => {
  const { fechaHoyInicio } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE fechaHoyInicio = ? ORDER BY currentDate desc";

  pool.query(sql, [fechaHoyInicio], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdUnicoByCierre = (req, res) => {
  const { fechaHoyInicio } = req.params;

  const sql = "SELECT * FROM servicio WHERE idUnico = ? AND cierre = '0'";

  pool.query(sql, [fechaHoyInicio], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdUnico = (req, res) => {
  const { fechaHoyInicio } = req.params;

  const sql = "SELECT * FROM servicio WHERE idUnico = ? ORDER BY idUnico desc";

  pool.query(sql, [fechaHoyInicio], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Actualizamos

exports.updateServicio = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE servicio SET ? WHERE id = ?";

  pool.query(sql, [req.body, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateAllServicio = (req, res) => {
  const id = req.params.id;
  const {
    numberPiso1 = 0,
    numberTerap = 0,
    propina = 0,
    servicio,
    totalServicio = 0,
    minuto = 0,
  } = req.body;

  const sql =
    "UPDATE servicio SET numberPiso1 = ?, numberTerap = ?, propina = ?, servicio = ?, totalServicio = ?, minuto = ?  WHERE id = ?";

  pool.query(
    sql,
    [numberPiso1, numberTerap, propina, servicio, totalServicio, minuto, id],
    () => {
      res.json({ message: "The servicio was Updated" });
    }
  );
};

exports.updateNumberPiso1 = (req, res) => {
  const { idUnico } = req.params;
  const { numberPiso1 = 0 } = req.body;

  const sql = "UPDATE servicio SET numberPiso1 = ? WHERE idUnico = ?";

  pool.query(sql, [numberPiso1, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberPiso1 = (req, res) => {
  const { idUnico } = req.params;
  const { numberPiso1 } = req.body;

  const sql = "UPDATE servicio SET numberPiso1 = ? WHERE idUnico = ?";

  pool.query(sql, [numberPiso1, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberPiso2 = (req, res) => {
  const { idUnico } = req.params;
  const { numberPiso2 = 0 } = req.body;

  const sql = "UPDATE servicio SET numberPiso2 = ? WHERE idUnico = ?";

  pool.query(sql, [numberPiso2, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberPiso2 = (req, res) => {
  const { idUnico } = req.params;
  const { numberPiso2 } = req.body;

  const sql = "UPDATE servicio SET numberPiso2 = ? WHERE idUnico = ?";

  pool.query(sql, [numberPiso2, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberEncargada = (req, res) => {
  const { idUnico } = req.params;
  const { numberEncarg = 0 } = req.body;

  const sql = "UPDATE servicio SET numberEncarg = ? WHERE idUnico = ?";

  pool.query(sql, [numberEncarg, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberEncargada = (req, res) => {
  const { idUnico } = req.params;
  const { numberEncarg } = req.body;

  const sql = "UPDATE servicio SET numberEncarg = ? WHERE idUnico = ?";

  pool.query(sql, [numberEncarg, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberTerap = (req, res) => {
  const { idUnico } = req.params;
  const { numberTerap = 0 } = req.body;

  const sql = "UPDATE servicio SET numberTerap = ? WHERE idUnico = ?";

  pool.query(sql, [numberTerap, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberTerap = (req, res) => {
  const { idUnico } = req.params;
  const { numberTerap } = req.body;

  const sql = "UPDATE servicio SET numberTerap = ? WHERE idUnico = ?";

  pool.query(sql, [numberTerap, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberOtros = (req, res) => {
  const { idUnico } = req.params;
  const { numberOtro = 0 } = req.body;

  const sql = "UPDATE servicio SET numberOtro = ? WHERE idUnico = ?";

  pool.query(sql, [numberOtro, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberOtros = (req, res) => {
  const { idUnico } = req.params;
  const { numberOtro } = req.body;

  const sql = "UPDATE servicio SET numberOtro = ? WHERE idUnico = ?";

  pool.query(sql, [numberOtro, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateLiquidacionTerap = (req, res) => {
  const id = req.params.id;
  const { liquidadoTerapeuta = 1, idTerapeuta} = req.body;

  const sql = "UPDATE servicio SET liquidadoTerapeuta = ?, idTerapeuta = ? WHERE id = ?";

  pool.query(sql, [liquidadoTerapeuta, idTerapeuta, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateLiquidacionEncarg = (req, res) => {
  const id = req.params.id;
  const { liquidadoEncargada = 1, idEncargada} = req.body;

  const sql = "UPDATE servicio SET liquidadoEncargada = ?, idEncargada = ? WHERE id = ?";

  pool.query(sql, [liquidadoEncargada, idEncargada, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateCierre = (req, res) => {
  const id = req.params.id;
  const { cierre = 1, idCierre} = req.body;

  const sql = "UPDATE servicio SET cierre = ?, idCierre = ? WHERE id = ?";

  pool.query(sql, [cierre, idCierre, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

// Eliminamos

exports.deleteServicio = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM servicio WHERE id = ?";

  pool.query(sql, ID, (err, result, fields) => {
    res.json({ message: "The Servicio was deleted" });
  });
};