const express = require('express');
const routerTerapeuta = express();

const terapeutaController = require('../controllers/terapeuta.controller');

module.exports = () => {

    // Consultar
    routerTerapeuta.get('/lisTerapeuta', terapeutaController.getTerapeutas);
    routerTerapeuta.get('/getId/:id', terapeutaController.getById);
    routerTerapeuta.get('/getNombre/:nombre', terapeutaController.getByNombre);
    routerTerapeuta.get('/getHoraEnd', terapeutaController.getByHoraEnd);

    // Insertar
    routerTerapeuta.post('/registerTerapeuta', terapeutaController.create);

    // Actualizar
    // routerTerapeuta.put('/updateByTerapeutas/:id', terapeutaController.updateTerapeutas);

    // Eliminar
    routerTerapeuta.delete('/terapeuta/:id', terapeutaController.deleteBookById);

    return routerTerapeuta;
}