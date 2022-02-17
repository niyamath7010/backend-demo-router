const express=require('express')

const router=express.Router()

const movieHandler=require('../handler/movieHandler')

router.post('/' , movieHandler.addNewMovie)

module.exports=router;