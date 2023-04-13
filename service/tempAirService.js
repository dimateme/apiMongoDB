const TempAir = require('../database/models/tempAirModel');
const{formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants');

//create  product service
module.exports.creationTempAir = async (serviceData) => {
  try{
    let tempAir = new TempAir({...serviceData});
    let result = await  tempAir.save();
    return formatMongoData(result);
  }catch (error){
    console.log('Something went wrong: Service: creationTempAir', error);
    throw new Error(error);
  }

}
//get all products service
module.exports.getAllTempAirs = async (skip = 0, limit = 10 ) => {
  try{
    let tempAirs = await TempAir.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    return formatMongoData(tempAirs);
  }catch (error){
    console.log('Something went wrong: Service: getAllTempAirs', error);
    throw new Error(error);
  }

}
//get product by id
module.exports.getTempAirById = async ({id}) => {
  try{
    checkObjectId(id);
    let tempAir = await TempAir.findById(id);
   if(!tempAir){
     throw new Error(constants.tempAirMessage.TEMPAIR_NOT_FOUND);
     }
    return formatMongoData(tempAir);
  }catch (error){
    console.log('Something went wrong: Service: getTempAirById', error);
    throw new Error(error);
  }

};

//mettre à jour la temperature id
module.exports.updateTempAir = async ({id, updateInfo}) => {
  try{
    checkObjectId(id);
    let tempAir = await TempAir.findOneAndUpdate(
     { _id: id},
     updateInfo,
     { new: true}
    );
   if(!tempAir){
     throw new Error(constants.tempAirMessage.TEMPAIR_NOT_FOUND);
     }
    return formatMongoData(tempAir);
  }catch (error){
    console.log('Something went wrong: Service: update threshold', error);
    throw new Error(error);
  }

};
//supprimer la temperature de l air par id
module.exports.deleteTempAir = async ({id}) => {
  try{
    checkObjectId(id);
    let tempAir = await TempAir.findByIdAndDelete(id);
   if(!tempAir){
     throw new Error(constants.tempAirMessage.TEMPAIR_NOT_FOUND);
     }
    return formatMongoData(tempAir);
  }catch (error){
    console.log('Something went wrong: Service: deleteTempAir', error);
    throw new Error(error);
  }

};
