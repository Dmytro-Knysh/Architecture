var connection = require('../config/config.bd');

var Extra = function (extra){
    this.extraId = extra.extraId;
    this.name = extra.name;
    this.price = extra.price;
}

Extra.create = function (newExtra,result){
    connection.query("INSERT INTO extra SET ?", newExtra, function(err,res){
        if(err){
            console.log("error", err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

Extra.findById = function(id,result){
    connection.query("Select * from extra where extraId = ? ", id,
        function(err,res){
            if(err){
                console.log("error: ", err);
                result(err,null);
            }
            else{
                result(null, res);
            }
        });
};

Extra.findAll = function(result) {
    connection.query("Select * from extra",
    function(err, res){
        if(err){
            console.log("error: ", err);
            result(err,null);
        }
        else{
            result(null, res);
        }
    });
};

Extra.update = function(id, tur, result){
    connection.query("UPDATE extra SET name = ?, price = ? WHERE extraId = ? ",
    [tur.name, tur.price, id],
    function (err, res){
        if(err){
            console.log("error: ", err);
            result(err,null);
        }
        else{
            result(null, res);
        }
    });
};

Extra.delete = function(id, result) {
    connection.query("DELETE FROM extra WHERE extraId = ?", [id],
        function (err, res){
            if(err){
                console.log("error: ", err);
                result(err,null);
            }
            else{
                result(null, res);
            }
        });
};

module.exports = Extra;