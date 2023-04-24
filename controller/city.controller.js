const City = require('../model/city.model');

exports.findAll = function(req, res){
    City.findAll(function(err,city){
        console.log('controller')
        if(err)
            res.send(err);
        res.send(city);
    });
};

exports.create = function(req,res){
    const new_city = new City(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        City.create(new_city, function(err,city){
            if(err)
                res.send(err);
            res.json({error:false, message:"city added successfully!", data:city});
        });
    }
};

exports.findById = function(req,res){
    City.findById(req.params.id, function (err,city){
        if(err)
        res.send(err);
    res.json(city);
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
            res.json({error:false, message:'city successfully updated'})
        })
    }
};

exports.delete = function(req,res){
    City.delete(req.params.id, function(err, city) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        res.json({error: false, message: 'city successfully deleted'});
    });
};