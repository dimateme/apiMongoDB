const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();
//permet d'afficher
const app = express();

// db connectivity
dbConnection();

//cors
app.use(cors());

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/temperature/seuil', require('./routes/tempAirRoutes'));

app.use('/api/temperature/historique', require('./routes/historiqueRoutes'));

app.get('/',(req,res,next)=>{
    res.send('Hello World from Node server');
})

app.use('/api/temperature/utilisateur', require('./routes/utilisateurRoutes'));
const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`Server listening on port ${PORT}`);
})
//error handler middleware
app.use(function (err,req,res,next){
    console.error(err.stack);
    res.status(500).send({
        status:500,
        message:err.message,
        body:{}
    });
})

