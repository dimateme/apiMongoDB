
const utilisateurService = require('../service/utilisateurService');

const constants = require('../constants');
module.exports.signup = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await utilisateurService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: utilisateur', error);
        response.message = error.message;
    }
   return res.status(response.status).send(response);
};

module.exports.login = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseFromService = await utilisateurService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
    }catch (error){
        console.log('Something went wrong: Controller: login', error);
        response.message = error.message;
    }
   return res.status(response.status).send(response);
}

