const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require("node-fetch");
require('./Models/Article')

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

const Article = mongoose.model("Article");

app.get('/',(req,res)=>{
    res.send("home");
})

app.post('/send-data',(req,res)=>{
    const article = new Article({
        title:req.body.title,
        date:req.body.date,
        body:req.body.body,
    })
    article.save()
    .then(data=>{
        console.log(data);
        res.send("success");
    }).catch(err=>{
        console.log(err);
    })
})

app.listen(3000,()=>{
    console.log("server running");
})



