const express = require('express');
const routerLiqTerap = express();

const liquidacionTerapController = require('../controllers/liquidacionTerap.controller');

module.exports = () => {

    // Consultar
    routerLiqTerap.get('/getByLiquidacionesTerapeuta', liquidacionTerapController.getLiquidacionesTerapeuta);
    routerLiqTerap.get('/getByIdTerap/:idTerapeuta', liquidacionTerapController.getIdTerap);

    // Insertar
    routerLiqTerap.post('/registerLiqTerap', liquidacionTerapController.create);

    // Actualizar
    routerLiqTerap.put('/updateByTerapeuta/:terapeuta', liquidacionTerapController.update);
    routerLiqTerap.put('/updateIdAndImporte/:idTerapeuta', liquidacionTerapController.updateByIdImporte);

    return routerLiqTerap;
}