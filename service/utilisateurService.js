const Utilisateur = require('../database/models/utilisateurModel');
const constants = require('../constants');
const  {formatMongoData} = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.signup =  async ({Courriel, MotDePasse}) => {
  try{
     const utilisateur = await Utilisateur.findOne({ Courriel });
    if(utilisateur){
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
     }

      MotDePasse = await bcrypt.hash(MotDePasse, 12);
     const nouveauUtilisateur = new Utilisateur({ Courriel, MotDePasse });
     let result = await nouveauUtilisateur.save();

    return formatMongoData(result);
  }catch (error){
    console.log('Something went wrong: Service: creationUtilisateur', error);
    throw new Error(error);
  }

};

module.exports.login =  async ({Courriel, MotDePasse}) => {
  try{
     const utilisateur = await Utilisateur.findOne({ Courriel });
    if(!utilisateur){
      throw new Error(constants.userMessage.USER_NOT_FOUND);
     }
    const isValid = await bcrypt.compare(MotDePasse, utilisateur.MotDePasse);
   if(!isValid){
     throw new Error(constants.userMessage.INVALID_PASSWORD);
   }
   const token = jwt.sign({ id: utilisateur._id }, process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'});
   return { token };
  }catch (error){
    console.log('Something went wrong: Service: login', error);
    throw new Error(error);
  }

};
