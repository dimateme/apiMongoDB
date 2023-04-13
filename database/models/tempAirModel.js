const mongoose = require('mongoose');

const tempAirSchema = new mongoose.Schema({
    SeuilMax: Number,
    SeuilMin: Number
}, {timestamps: true,
toObject:{
    transform:function (doc,ret,options){
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
}
});
module.exports = mongoose.model('TempAir', tempAirSchema);
