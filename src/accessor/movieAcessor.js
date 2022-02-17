const Movie=require('../db/models/movieModel').movie

function addNewMovie(title,rating) {
    const movie=new Movie({title, rating, dateAdded:Date.now()})
    // movie.save(cb)
    movie.save(function(err) {
        if(err){
            console.log(`some error occured ${err}`)
        }
        else{
            console.log("movie inserted");
        }
    })
    console.log("after save");
}

module.exports={
    addNewMovie
}