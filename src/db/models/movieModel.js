const mongoose=require('mongoose')
const movieSchema=require('../schema/movie').movieSchema

const movie=mongoose.model('movie',movieSchema)

module.exports={
    movie
}