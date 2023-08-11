const express = require('express');
const routerEncargada = express();

const encargadaController = require('../controllers/encargada.controller');

module.exports = () => {

    // Consultar
    routerEncargada.get('/listaEncargada', encargadaController.getEncargadas);
    routerEncargada.get('/idEncargada/:id', encargadaController.getById);
    routerEncargada.get('/idAdmin/:id', encargadaController.getIdAndRol);
    routerEncargada.get('/usuarioEncargada/:usuario', encargadaController.getByUsuario);
    routerEncargada.get('/nombreEncargada/:nombre', encargadaController.getByNombre);
    routerEncargada.get('/usuarioAndpass/:usuario/:pass', encargadaController.getUsuarioAndPass);

    // Insertar
    routerEncargada.post('/registerEncargada', encargadaController.create);

    // Actualizar
    // routerEncargada.put('/updateEncargada/:id', encargadaController.updateTerapeutas);

    // Eliminar
    routerEncargada.delete('/deleteEncargada/:id', encargadaController.deleteBookById);

    return routerEncargada;
}