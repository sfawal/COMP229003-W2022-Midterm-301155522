// For production environment never expose your connection string.
let URI = "mongodb+srv://dbadmin:ylR8Z4WxKDrk2Bl5@cluster003midterm.9jee6.mongodb.net/mydb?retryWrites=true&w=majority"

//Database setup
let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the Database
    mongoose.connect(URI);

    let mongoDB = mongoose.connection;
   
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDB;
}