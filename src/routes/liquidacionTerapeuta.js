const express = require('express');
const routerLiqTerap = express();

const liquidacionTerapController = require('../controllers/liquidacionTerap.controller');

module.exports = () => {

    // Consultar
    routerLiqTerap.get('/getByLiquidacionesTerapeuta', liquidacionTerapController.getLiquidacionesTerapeuta);
    routerLiqTerap.get('/getByIdTerap/:idTerapeuta', liquidacionTerapController.getIdTerap);
    routerLiqTerap.get('/getTerapeutaAndEncargada/:terapeuta/:encargada', liquidacionTerapController.getByTerapeutaAndEncargada);

    // Insertar
    routerLiqTerap.post('/registerLiqTerap', liquidacionTerapController.create);

    // Actualizar
    routerLiqTerap.put('/updateByTerapeuta/:terapeuta', liquidacionTerapController.update);
    routerLiqTerap.put('/updateIdAndImporte/:idTerapeuta', liquidacionTerapController.updateByIdImporte);
    routerLiqTerap.put('/updateByTerapByImporteById/:id', liquidacionTerapController.updateTerapeutaImporteById);    

    return routerLiqTerap;
}