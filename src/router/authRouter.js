const express=require('express')

const authRouter=express.Router()

const authhandler=require('../handler/authHandler')



authRouter.post('/login',authhandler.login)

module.exports=
    authRouter;

