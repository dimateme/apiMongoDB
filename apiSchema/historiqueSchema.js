const Joi = require('@hapi/joi');

module.exports.creationHistoriqueSchema = Joi.object().keys({
    temperature: Joi.number().required(),
    date: Joi.string().required()
});
module.exports.getAllHistoriqueSchema = Joi.object().keys({
        skip: Joi.string(),
        limit: Joi.string()
});

module.exports.updateTempAirSchema = Joi.object().keys({
    temperature: Joi.number(),
    date: Joi.string()

});
