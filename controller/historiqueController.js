const historiqueService = require('../service/historiqueService');

const constants = require('../constants');
//création de  historique temperature
module.exports.creationHistorique = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await historiqueService.creationHistorique(req.body);
        response.status = 200;
        response.message = constants.historiqueMessage.HISTORIQUE_CREATED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: creationHistorique', error);
        response.message = error.message;
    }
   return res.status(response.status).send(response);
}
//method qui permet d'obtenir l'historique des température
module.exports.getAllHistorique = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await historiqueService.getAllHistorique(req.query);
        response.status = 200;
        response.message = constants.historiqueMessage.HISTORIQUE_FETCHED;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: getAllHistorique', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}
