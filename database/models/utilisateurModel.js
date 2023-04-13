const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    Courriel: String,
    MotDePasse: String,
}, {timestamps: true,
    toObject:{
        transform:function (doc,ret,options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.MotDePasse;
            delete ret.__v;
            return ret;
        }
    }
});
module.exports = mongoose.model('Utilisateur', utilisateurSchema);
