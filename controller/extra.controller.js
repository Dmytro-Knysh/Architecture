// !Додаємо для виведення
const express = require('express')
var app = express();
var path = require('path');
app.engine('ejs', require('ejs').__express);
const Extra = require('../model/extra.model');
// Виведення всій інформації з таблиці
exports.findAll = function (req, res) { 
    Extra.findAll(function (err, extra) {
        console.log('controller')
        if (err)
            res.send(err);
        // !З'єднуємо з файлом виведення
        res.render('extra.ejs', { Extra: extra });
        // res.send(departament);

    });
}

exports.create = function(req,res){
    const new_extra = new Extra(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        Extra.create(new_extra, function(err,extra){
            if(err)
                res.send(err);
            //res.json({error:false, message:"Extra added successfully!", data:extra});
            res.redirect('/api/extra');
        });
    }
};

exports.findById = function(req,res){
    Extra.findById(req.params.id, function (err,extra){
        if(err)
        res.send(err);
    //res.json(extra);
    res.render('extra_edit.ejs',{Extra:extra});
    });
};

exports.update = function(req,res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true,  message: 'Please provide all required field'});
    }
    else{
        Extra.update(req.params.id, new Extra(req.body), function(err,extra){
            if(err)
                res.send(err);
            //res.json({error:false, message:'extra successfully updated'})
            res.redirect('/api/extra');
        })
    }
};

exports.delete = function(req,res){
    Extra.delete(req.params.id, function(err, extra) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        //res.json({error: false, message: 'Extra successfully deleted'});
        res.redirect('/api/extra');
    });
};