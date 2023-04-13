const Joi = require('@hapi/joi');

module.exports.creationTempAirSchema = Joi.object().keys({
    SeuilMax: Joi.number().required(),
    SeuilMin: Joi.number().required()
});
module.exports.getAllTempAirSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string(),
});

module.exports.updateTempAirSchema = Joi.object().keys({
    SeuilMax: Joi.number(),
    SeuilMin: Joi.number()

});

