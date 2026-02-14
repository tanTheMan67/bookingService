const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const apiRoutes=require('./routes/index');
const app = express();
const db= require('./models/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const setupAndStartServer = async()=>{
    app.use('/api',apiRoutes);
    if(process.env.DB_SYNC){
       db.sequelize.sync({alter:true});
    }
app.listen(process.env.PORT,()=>{
    console.log("app is listening on port "+process.env.PORT);
})
}
setupAndStartServer();