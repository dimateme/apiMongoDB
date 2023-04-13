const Historique = require('../database/models/historiqueModel');
const{formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants');

//create  historique service
module.exports.creationHistorique = async (serviceData) => {
  try{
    let historique = new Historique({...serviceData});
    let result = await  historique.save();
    return formatMongoData(result);
  }catch (error){
    console.log('Something went wrong: Service: creationHistorique', error);
    throw new Error(error);
  }

}
//get all historique service
module.exports.getAllHistorique = async (skip = 0, limit = 10 ) => {
  try{
    let historique = await Historique.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    return formatMongoData(historique);
  }catch (error){
    console.log('Something went wrong: Service: getAllHistorique', error);
    throw new Error(error);
  }

}
