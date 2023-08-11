const pool = require("../config/conexion");

// Consultamos

exports.getTerapeutas = (req, res) => {
  const sql = "SELECT * FROM terapeuta ORDER BY nombre asc;";
  try {
    pool.query(sql, (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json({ estado: true, data: [] });
      } else {
        console.log("Data good")
        res.status(200).json({
          estado: true,
          data: result
        });
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM terapeuta WHERE id = ?";
  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getByNombre = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM terapeuta WHERE nombre = ?";
  pool.query(sql, [nombre], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getByHoraEnd = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM terapeuta ORDER BY horaEnd";
  pool.query(sql, [nombre], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO terapeuta SET ?";

  pool.query(sql, [req.body], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error al guardar en BD" });
    }
    res.json({ message: "Nueva terapeuta agregada" })
  })
}

// Actualizamos

exports.updateTerapeutas = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE terapeuta SET ? WHERE id = ?";
  pool.query(sql, [req.body, id], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.updateBookById = (req, res) => {
  const values = Object.values(req.body);
  const ID = req.params.id;

  const sql = "UPDATE books SET title=?, summary=?, url_image=? WHERE id=?";
  pool.query(sql, [...values, ID], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error al actualizar" });
    }
    res.json({ message: "Libro actualizado" })
  })
}

// Eliminamos

exports.deleteBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM books WHERE id=?";
  pool.query(sql, ID, (err, result, fields) => {
    if (err) {
      res.json({ message: "Error al eliminar" });
    }
    res.json({ message: "Un libro eliminado" })
  })
}