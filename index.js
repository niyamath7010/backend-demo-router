const express=require('express')

const app=express()

const mongoose=require('mongoose')

// let process=require('process')

const router=require('./src/router/router')

const authRouter=require('./src/router/authRouter')

const bodyParser = require('body-parser')

const movieRouter=require('./src/router/movieRouter')

app.use(bodyParser.json())

app.use('/auth',authRouter)

app.use('/actor',router)

app.use('/movie',movieRouter)

let username="niyamath";
let password="niyamath";
let clusterUrl="cluster07.gy8qe.mongodb.net";
let dbName='test';

let dburl=`mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;
mongoose.connect(dburl)

console.log(`username =${username}`);
app.listen(3000,()=>{
    console.log("server started");
})

// mongodb+srv://niyamath:niyamath@cluster07.gy8qe.mongodb.net/test   

// "http://localhost:3000/movie?title=love&rating=5"