const Router = require('express');



module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

    const UserController=require('./user-controller');

    
     ROUTER.get('/users',UserController.findAll);
    
    ROUTER.get('/users/:email',UserController.findOne);

    ROUTER.post('/users/add',UserController.createUser);

    ROUTER.put('/users/update/:email',UserController.updateUser);

    ROUTER.delete('/users/delete/:id',UserController.deleteUser);



    app.use('/app',ROUTER);

};