const express = require('express');
const router = express.Router();
const utilisateurController = require('../controller/utilisateurController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');

const utilisateurSchema = require('../apiSchema/utilisateurSchema');
//route for user sign up
router.post('/signup',
 joiSchemaValidation.validateBody(utilisateurSchema.signup),
 utilisateurController.signup
);
// route for user login
router.post('/login',
 joiSchemaValidation.validateBody(utilisateurSchema.login),
utilisateurController.login
)
module.exports = router;

