// !Додаємо для виведення
const express = require('express')
var app = express();
var path = require('path');
app.engine('ejs', require('ejs').__express);
const tour1 = require('../model/tour.model');
// Виведення всій інформації з таблиці
exports.findAll = function (req, res) { 
    tour1.findAll(function (err, tour) {
        console.log('controller')
        if (err)
            res.send(err);
        // !З'єднуємо з файлом виведення
        res.render('tour.ejs', { tour1: tour });
        // res.send(departament);

    });
};

exports.create = function(req,res){
    const new_tour = new tour1(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        tour1.create(new_tour, function(err,tour){
            if(err)
                res.send(err);
            res.redirect('/api/tour');
            //res.json({error:false, message:"tour added successfully!", data:tour});
        });
    }
};

exports.findById = function(req,res){
    tour1.findById(req.params.id, function (err,tour){
        if(err)
            res.send(err);
    res.render('tour_edit.ejs',{tour1:tour});
    //res.json(tour);
    });
};

exports.update = function(req,res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true,  message: 'Please provide all required field'});
    }
    else{
        tour1.update(req.params.id, new tour1(req.body), function(err,tour){
            if(err)
                res.send(err);
            res.redirect('/api/tour')
            //res.json({error:false, message:'tour successfully updated'})
        })
    }
};

exports.delete = function(req,res){
    tour1.delete(req.params.id, function(err, tour) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        res.redirect('/api/tour')
        //res.json({error: false, message: 'tour successfully deleted'});
    });
};

