const express = require('express');
const routerLiqEncarg = express();

const liquidacionEncargController = require('../controllers/liquidacionEncarg.controller');

module.exports = () => {

    // Consultar
    routerLiqEncarg.get('/getByLiquidacionesEncargada', liquidacionEncargController.getLiquidacionesEncargada);
    routerLiqEncarg.get('/getByIdEncarg/:idEncargada', liquidacionEncargController.getIdEncarg);

    // Insertar
    routerLiqEncarg.post('/registerLiqEncarg', liquidacionEncargController.create);

    // Actualizar
    routerLiqEncarg.put('/updateByEncargada/:encargada', liquidacionEncargController.update);
    routerLiqEncarg.put('/updateIdAndImporte/:idEncargada', liquidacionEncargController.updateByIdImporte);

    return routerLiqEncarg;
}