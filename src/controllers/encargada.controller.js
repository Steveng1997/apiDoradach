const pool = require("../config/conexion");

// Consultamos

exports.getEncargadas = (req, res) => {
  const sql = "SELECT * FROM encargada ORDER BY id asc;";

  try {
    pool.query(sql, (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE id = ?";

  try {
    pool.query(sql, [id], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getIdAndRol = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE rol = 'administrador' AND id = ?";
  try {
    pool.query(sql, [id], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getByUsuario = (req, res) => {
  const { usuario } = req.params;

  const sql = "SELECT * FROM encargada WHERE usuario = ?";
  try {
    pool.query(sql, [usuario], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getByNombre = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM encargada WHERE nombre = ?";
  try {
    pool.query(sql, [nombre], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

exports.getUsuarioAndPass = (req, res) => {
  const { usuario } = req.params;
  const { pass } = req.params;

  const sql = "SELECT * FROM encargada WHERE usuario = ? AND pass = ?";
  try {
    pool.query(sql, [usuario, pass], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al obtener la data !")
        res.status(300).json(err);
      } else {
        console.log("Data good")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
}

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO encargada SET ?";

  try {
    pool.query(sql, [req.body], (err, result, fields) => {
      if (err) throw err;
      if (result.length == 0) {
        console.log("Error al guardar en BD !")
        res.status(300).json(err);
      } else {
        console.log("Nueva encargada agregada")
        res.status(200).json(result);
      }
    });
  } catch (err) {
    res.status(409).send(String(err));
  }
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