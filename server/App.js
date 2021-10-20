const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {getWeather} = require('./getWeather');
const {getNews} = require('./getNews');

const app = express();
app.use(bodyParser.json());
const mongoURI = ""

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to database");
})

mongoose.connection.on("error", (err)=>{
    console.log("Unable to connect to database", err);
})

app.get('/',(req,res)=>{
    res.send("home");
})

app.listen(3000,()=>{
    console.log("server running");
})



