const mongoose = require('mongoose');

const historiqueSchema = new mongoose.Schema({
    temperature: Number,
    date: String
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
module.exports = mongoose.model('Historique', historiqueSchema);
