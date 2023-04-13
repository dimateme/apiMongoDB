const express = require('express');
const router = express.Router();

const historiqueController = require('../controller/historiqueController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const historiqueSchema = require('../apiSchema/historiqueSchema');
const tokenValidation = require('../middleware/tokenValidation');

//route for create historique
router.post('/',
  // tokenValidation.validateToken,
    joiSchemaValidation.validateBody(historiqueSchema.creationHistoriqueSchema) ,
    historiqueController.creationHistorique
);

//route for get all historique
router.get('/',
 //tokenValidation.validateToken,
 joiSchemaValidation.validateQueryParams(historiqueSchema.getAllHistoriqueSchema),
 historiqueController.getAllHistorique);

module.exports = router;

