// File name: models/movie.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);