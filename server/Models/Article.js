const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: String,
    date: String,
    body: String,
})

mongoose.model("Article", ArticleSchema);