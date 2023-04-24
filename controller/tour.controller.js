const Tour = require('../model/tour.model');

exports.findAll = function(req, res){
    Tour.findAll(function(err,tour){
        console.log('controller')
        if(err)
            res.send(err);
        res.send(tour);
    });
};

exports.create = function(req,res){
    const new_tour = new Tour(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message:'Please provide all required field'});
    }
    else{
        Tour.create(new_tour, function(err,tour){
            if(err)
                res.send(err);
            res.json({error:false, message:"tour added successfully!", data:tour});
        });
    }
};

exports.findById = function(req,res){
    Tour.findById(req.params.id, function (err,tour){
        if(err)
        res.send(err);
    res.json(tour);
    });
};

exports.update = function(req,res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true,  message: 'Please provide all required field'});
    }
    else{
        Tour.update(req.params.id, new Tour(req.body), function(err,tour){
            if(err)
                res.send(err);
            res.json({error:false, message:'tour successfully updated'})
        })
    }
};

exports.delete = function(req,res){
    Tour.delete(req.params.id, function(err, tour) {
        console.log("HI" + req.params.id);
        if(err)
            res.send(err);
        res.json({error: false, message: 'tour successfully deleted'});
    });
};