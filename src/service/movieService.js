const movieAcessor=require('../accessor/movieAcessor')


function addNewMovie(title,rating) {
    movieAcessor.addNewMovie(title,rating)
}

module.exports={
    addNewMovie
}