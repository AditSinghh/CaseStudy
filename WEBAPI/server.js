const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');
const CORS_OPTIONS = {origin: "http://localhost:4200"};
// sync db with server
const db=require('./db/models');
db.sequelize.sync();



server.use(express.json());
server.use(express.urlencoded({extended : true }));
server.use(cors(CORS_OPTIONS));



//App URL "http://localhost:3000/app"
require('./app/app-route')(server);



//Main URL "http://localhost:3000/app"
server.get('/',(req,resp)=>{
resp.send({message:"Welcome to express + postgre + node"})
});



server.listen(port,()=>{
console.log(`http://localhost:${port} Started`);
});