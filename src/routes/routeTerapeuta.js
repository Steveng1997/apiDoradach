const express = require('express');
const routerTerapeuta = express();

const terapeutaController = require('../controllers/terapeuta.controller');

module.exports = () => {

    // Consultar
    routerTerapeuta.get('/getId/:id', terapeutaController.getByIdTerapeuta);
    routerTerapeuta.get('/getNombre/:nombre', terapeutaController.getByNombre);
    routerTerapeuta.get('/getByIdAsc', terapeutaController.getAllTerapeuta);
    routerTerapeuta.get('/getByHoraEndDesc', terapeutaController.getAllTerapeutaByOrden);

    // Insertar
    routerTerapeuta.post('/registerTerapeuta', terapeutaController.create);
    
    // Actualizar
    routerTerapeuta.put('/updateTherapistById/:id', terapeutaController.updateTerapeutas);
    routerTerapeuta.put('/update3Item/:nombre', terapeutaController.updateBy3Item);
    routerTerapeuta.put('/updateByHoraAndSalida/:nombre', terapeutaController.updateHoraAndSalida);

    // Eliminar
    routerTerapeuta.delete('/deleteTerapeuta/:id', terapeutaController.deleteTerapeutas);

    return routerTerapeuta;
}