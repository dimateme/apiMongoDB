const tempAirService = require('../service/tempAirService');

const constants = require('../constants');
//création de seuil de température d'air
module.exports.creationTempAir = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await tempAirService.creationTempAir(req.body);
        response.status = 200;
        response.message = constants.tempAirMessage.TEMPAIR_CREATED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: creationTempAir', error);
        response.message = error.message;
    }
   return res.status(response.status).send(response);
}
//method to get all temperature air
module.exports.getAllTempAirs = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await tempAirService.getAllTempAirs(req.query);
        response.status = 200;
        response.message = constants.tempAirMessage.TEMPAIR_FETCHED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: getAllTempAirs', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

//method qui temperature par Id
module.exports.getTempAirById = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await tempAirService.getTempAirById(req.params);
        response.status = 200;
        response.message = constants.tempAirMessage.TEMPAIR_FETCHED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: getTempAirById', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};
//method qui permet de modifier les seuils de température
module.exports.updateTempAir = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await tempAirService.updateTempAir({
        id: req.params.id,
        updateInfo: req.body
     });
        response.status = 200;
        response.message = constants.tempAirMessage.TEMPAIR_UPDATED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: updateTempAir', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};
//methode for delete temperature air by id
module.exports.deleteTempAir = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await tempAirService.deleteTempAir(req.params);
        response.status = 200;
        response.message = constants.tempAirMessage.TEMPAIR_DELETED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: deleteTempAir', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
