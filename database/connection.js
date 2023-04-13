const mongoose = require('mongoose');
module.exports = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected');

    }catch (error){
        console.log('Database connection Error', error);
        throw new Error(error);
    }

}
