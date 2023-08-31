const express = require('express');
const routerServicio = express();

const servicioController = require('../controllers/servicio.controller');

module.exports = () => {

    // Get
    routerServicio.get('/getByCierreTrue', servicioController.getByCurrentDesc);
    routerServicio.get('/getTerapeutaAndEncargada/:terapeuta/:encargada', servicioController.getByTerapeutaAndEncargada);
    routerServicio.get('/getEncargada/:encargada', servicioController.getByEncargada);
    routerServicio.get('/getEncargadaAndCierre/:encargada', servicioController.getByCierre);
    routerServicio.get('/getServicios', servicioController.getServicio);
    routerServicio.get('/getByLiquidacionEncargadaFalse', servicioController.getByLiquidEncargadaFalse);
    routerServicio.get('/getByLiquidacionTerapeutaFalse', servicioController.getByLiquidTerapFalse);
    routerServicio.get('/getByLiquidacionTerapeutaTrue', servicioController.getByLiquidTerapTrue);
    routerServicio.get('/getIdTerapeuta/:idTerapeuta', servicioController.getByIdTerap);
    routerServicio.get('/getIdCierre/:idCierre', servicioController.getByIdCierre);
    routerServicio.get('/getIdEncargada/:idEncargada', servicioController.getByIdEncarg);
    routerServicio.get('/getCierreFalse', servicioController.geyByCierreFalse);
    routerServicio.get('/getId/:id', servicioController.getById);
    routerServicio.get('/getIdEditar/:id', servicioController.getByEditar);
    routerServicio.get('/getByTerapeutaAsc/:terapeuta', servicioController.getTerapeutaByAsc);
    routerServicio.get('/getByTerapeutaDesc/:terapeuta', servicioController.getTerapeutaByDesc);
    routerServicio.get('/getByTerapeuta/:terapeuta', servicioController.getTerapeuta);
    routerServicio.get('/getByIdUnico/:idUnico', servicioController.getIdDocument);
    routerServicio.get('/getByEncargada/:encargada', servicioController.getEncargada);
    routerServicio.get('/getTerapeuAndEncar/:terapeuta/:encargada', servicioController.getTerapeutaEncargada);
    routerServicio.get('/getEncargadaLiquidacionFalse/:encargada', servicioController.getEncargadaAndLiquidacion);
    routerServicio.get('/getEncargadaLiquidadoTerpFalse/:encargada', servicioController.getEncargadaNoLiquidadaTerap);
    routerServicio.get('/getEncargNoLiquid/:encargada', servicioController.getEncargadaNoLiquidada);
    routerServicio.get('/getEncargNoLiquidByFechaDesc/:encargada', servicioController.getEncargadaNoLiquidadaByFechaDesc);
    routerServicio.get('/getTerapgNoLiquidByFechaDesc/:encargada', servicioController.getTerapNoLiquidadaByFechaDesc);
    routerServicio.get('/getNoEncargNoLiquidByFechaAsc/:encargada', servicioController.getEncargadaNoLiquidadaByFechaAsc);
    routerServicio.get('/getNoTerapNoLiquidByFechaAsc/:encargada', servicioController.getTerapNoLiquidadaByFechaAsc);
    routerServicio.get('/getByEncargadaNoCierre/:encargada', servicioController.getEncargadaNoCierre);
    routerServicio.get('/getByTerapFechaAsc/:terapeuta/:encargada', servicioController.getTerapeutaFechaAsc);
    routerServicio.get('/getByTerapFechaAscByLiquidadoTrue/:terapeuta/:encargada', servicioController.getTerapeutaFechaAscByLiqTrue);
    routerServicio.get('/getEncargFechaAscByLiqTrue/:encargada', servicioController.getEncargadaFechaAscByLiqTrue);
    routerServicio.get('/getEncargFechaAscByLiqFalse/:encargada', servicioController.getEncargFechaAsc);
    routerServicio.get('/getTerapeutaAndEncargadaFechaDesc/:terapeuta/:encargada', servicioController.getTerapeutaFechaDesc);
    routerServicio.get('/getTerapeutaAndEncargadaFechaDescLiqTrue/:terapeuta/:encargada', servicioController.getTerapeutaFechaDescByLiqTrue);
    routerServicio.get('/getByEncargadaByLiqTrue/:terapeuta/:encargada', servicioController.getEncargadaFechaDescByLiqTrue);
    routerServicio.get('/getByTerapeutaWithCurrentDate/:terapeuta', servicioController.getTerapeutaWithCurrentDate);
    routerServicio.get('/getByEncargFechaDesc/:encargada', servicioController.getEncargFechaDesc);
    routerServicio.get('/getByEncargadaFechaAsc/:encargada', servicioController.getEncargadaFechaAsc);
    routerServicio.get('/getByEncargadaFechaDesc/:encargada', servicioController.getEncargadaFechaDesc);
    routerServicio.get('/getByFechaHoy/:fechaHoyInicio', servicioController.getFechaHoy);
    routerServicio.get('/getByIdUnicoByCierre/:idUnico', servicioController.getIdUnicoByCierre);
    routerServicio.get('/getByIdUnico/:idUnico', servicioController.getIdUnico);
    routerServicio.get('/getByIdDesc/:idUnico', servicioController.getIdDesc);
    routerServicio.get('/getByServicioByEncargadaAndIdUnico/:encargada', servicioController.getServicioByEncargadaAndIdUnico);
    routerServicio.get('/getByEncargadaFechaAscByCierreTrue/:encargada', servicioController.getEncargadaFechaAscByCierreTrue);
    routerServicio.get('/getByEncargadaFechaDescByCierreFalse/:encargada', servicioController.getEncargadaFechaDescByCierreFalse);
    routerServicio.get('/getTerapeutaEncargadaFechaHoraInicioFechaHoraFin', servicioController.getByTerapeutaEncargadaFechaHoraInicioFechaHoraFin);

    // Insert
    routerServicio.post('/registerServicio', servicioController.create);

    // Update
    routerServicio.put('/updateByServicio/:id', servicioController.updateServicio);
    routerServicio.put('/updateAllTheServicio/:id', servicioController.updateAllServicio);
    routerServicio.put('/updateByNumberPiso1/:idUnico', servicioController.updateNumberPiso1);
    routerServicio.put('/updateByValuePisos/:id/:idUnico', servicioController.updateValuePisos);
    routerServicio.put('/updateByWithValueNumberPiso1/:id/:idUnico', servicioController.updateWithValueNumberPiso1);
    routerServicio.put('/updateByNumberPiso2/:idUnico', servicioController.updateNumberPiso2);
    routerServicio.put('/updateByWithValueNumberPiso2/:id/:idUnico', servicioController.updateWithValueNumberPiso2);
    routerServicio.put('/updateByNumberEncargada/:idUnico', servicioController.updateNumberEncargada);
    routerServicio.put('/updateByWithValueNumberEncargada/:id/:idUnico', servicioController.updateWithValueNumberEncargada);
    routerServicio.put('/updateByNumberTerap/:idUnico', servicioController.updateNumberTerap);
    routerServicio.put('/updateByWithValueNumberTerap/:id/:idUnico', servicioController.updateWithValueNumberTerap);
    routerServicio.put('/updateByNumberOtros/:idUnico', servicioController.updateNumberOtros);
    routerServicio.put('/updateByWithValueNumberOtros/:id/:idUnico', servicioController.updateWithValueNumberOtros);
    routerServicio.put('/updateByLiquidacionTerap/:id', servicioController.updateLiquidacionTerap);
    routerServicio.put('/updateByLiquidacionEncarg/:id', servicioController.updateLiquidacionEncarg);
    routerServicio.put('/updateByCierre/:idCierre/:id', servicioController.updateCierre);

    // Delete
    routerServicio.delete('/EliminarServicio/:id', servicioController.deleteServicio);

    return routerServicio;
}