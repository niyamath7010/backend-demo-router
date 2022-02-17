const movieService=require('../service/movieService')

function addNewMovie(req,res){
    const title=req.query.title;
    const rating=req.query.rating
    console.log("trying to add new movie");
    movieService.addNewMovie(title,rating,  function(err){
        if(err){
            res.status(500).send(err.message)
        }
        else{
            res.status(200).send("Adding the movie")
        }
    })
    res.status(200).send("Adding the movie")
}


module.exports={
    addNewMovie
}