const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tour_agency'
});

connection.connect(function(err) {
    if(!err){
        console.log("Database is connected");
    } else{
        console.log("Error while conncetcing with database");
    }
});

module.exports = connection;