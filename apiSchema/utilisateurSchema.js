const  Joi  =  require ( '@hapi/joi' ) ;

module.exports.signup = Joi.object().keys({
    Courriel: Joi.string().required(),
    MotDePasse: Joi.string().required()
});
module.exports.login = Joi.object().keys({
    Courriel: Joi.string().required(),
    MotDePasse: Joi.string().required()
});
