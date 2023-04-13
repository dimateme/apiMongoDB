
const express = require('express');
const router = express.Router();

const tempAirController = require('../controller/tempAirController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const tempAirSchema = require('../apiSchema/tempAirSchema');
const tokenValidation = require('../middleware/tokenValidation');

//routes pour les seuils de température
router.post('/',

    joiSchemaValidation.validateBody(tempAirSchema.creationTempAirSchema) ,
    tempAirController.creationTempAir
);

//route pour obtenir les seuils de température par id
router.get('/:id',
  tempAirController.getTempAirById);

//route pour modifier les seuils de température
router.put('/:id',
  joiSchemaValidation.validateBody(tempAirSchema.updateTempAirSchema),
  tempAirController.updateTempAir
);
//route for get all products
router.get('/',
 //tokenValidation.validateToken,
 joiSchemaValidation.validateQueryParams(tempAirSchema.getAllTempAirSchema),
 tempAirController.getAllTempAirs);

//route for delete
router.delete('/:id',
   // tokenValidation.validateToken,
    tempAirController.deleteTempAir
)
module.exports = router;
