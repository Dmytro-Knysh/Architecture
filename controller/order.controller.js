// !Додаємо для виведення
const express = require('express')
var app = express();
var path = require('path');
app.engine('ejs', require('ejs').__express);
const Order = require('../model/order.model');
// Виведення всій інформації з таблиці
exports.findAll = function (req, res) { 
    Order.findAll(function (err, tour) {
        console.log('controller')
        if (err)
            res.send(err);
        // !З'єднуємо з файлом виведення
        res.render('order.ejs', { Order: tour });
        // res.send(departament);

    });
};

exports.create = function(req,res){
    const new_order = new Order(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        Order.create(new_order, function(err,order){
            if(err)
                res.send(err);
            //res.json({error:false, message:"Order added successfully!", data:order});
            res.redirect('/api/order');
        });
    }
};

exports.findById = function(req,res){
    Order.findById(req.params.id, function (err,order){
        if(err)
        res.send(err);
    //res.json(order);
    res.render('order_edit.ejs',{Order:order});
    });
};

exports.update = function(req,res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true,  message: 'Please provide all required field'});
    }
    else{
        Order.update(req.params.id, new Order(req.body),function(err,order){
            if(err)
                res.send(err);
            //res.json({error:false, message:'order successfully updated'});
            res.redirect('/api/order');
        })
    }
};

exports.delete = function(req,res){
    Order.delete(req.params.id, function(err, order) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        //res.json({error: false, message: 'Order successfully deleted'});
        res.redirect('/api/order');
    });
};