const express = require('express');
const router = express();

const terapeutaController = require('../controllers/terapeuta.controller');

module.exports = () => {

    // Consultar
    router.get('/lisTerapeuta', terapeutaController.getTerapeutas);
    router.get('/getId/:id', terapeutaController.getById);
    router.get('/getNombre/:nombre', terapeutaController.getByNombre);
    router.get('/getHoraEnd', terapeutaController.getByHoraEnd);

    // Insertar
    router.post('/registerTerapeuta', terapeutaController.create);

    // Actualizar
    router.put('/updateByTerapeutas/:id', terapeutaController.updateTerapeutas);

    // Eliminar
    router.delete('/terapeuta/:id', terapeutaController.deleteBookById);

    return router;
}