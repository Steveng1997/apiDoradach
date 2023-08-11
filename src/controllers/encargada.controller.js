const pool = require("../config/conexion");

// Consultamos

exports.getEncargadas = (req, res) => {
  const sql = "SELECT * FROM encargada ORDER BY id asc;";
  pool.query(sql, (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE id = ?";
  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getIdAndRol = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE rol = 'administrador' AND id = ?";
  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getByUsuario = (req, res) => {
  const { usuario } = req.params;

  const sql = "SELECT * FROM encargada WHERE usuario = ?";
  pool.query(sql, [usuario], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getByNombre = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM encargada WHERE nombre = ?";
  pool.query(sql, [nombre], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getUsuarioAndPass = (req, res) => {
  const { usuario } = req.params;
  const { pass } = req.params;

  const sql = "SELECT * FROM encargada WHERE usuario = ? AND pass = ?";
  pool.query(sql, [usuario, pass], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO encargada SET ?";

  pool.query(sql, [req.body], (err, result, fields) => {
    if (err) {
      res.json({ message: "Error al guardar en BD" });
    }
    res.json({ message: "Nueva encargada agregada" })
  })
}

// Actualizamos

exports.updateencargadas = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE encargada SET ? WHERE id = ?";
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