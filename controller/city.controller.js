// !Додаємо для виведення
const express = require('express')
var app = express();
var path = require('path');
app.engine('ejs', require('ejs').__express);
const City = require('../model/city.model');
// Виведення всій інформації з таблиці
exports.findAll = function (req, res) { 
    City.findAll(function (err, tour) {
        console.log('controller')
        if (err)
            res.send(err);
        // !З'єднуємо з файлом виведення
        res.render('city.ejs', { City: tour });
        // res.send(departament);

    });
}

exports.create = function(req,res){
    const new_city = new City(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        City.create(new_city, function(err,city){
            if(err)
                res.send(err);
            //res.json({error:false, message:"city added successfully!", data:city});
            res.redirect('/api/city');
        });
    }
};

exports.findById = function(req,res){
    City.findById(req.params.id, function (err,city){
        if(err)
        res.send(err);
    //res.json(city);
    res.render('city_edit.ejs',{City:city});
    });
};

exports.update = function(req,res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true,  message: 'Please provide all required field'});
    }
    else{
        City.update(req.params.id, new City(req.body), function(err,city){
            if(err)
                res.send(err);
            res.redirect('/api/city');
            //res.json({error:false, message:'city successfully updated'})
        })
    }
};

exports.delete = function(req,res){
    City.delete(req.params.id, function(err, city) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        res.redirect('/api/city');
        //res.json({error: false, message: 'city successfully deleted'});
    });
};