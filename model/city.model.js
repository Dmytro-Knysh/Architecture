var connection = require('../config/config.bd');

var City = function (city){
    this.cityId = city.cityId;
    this.aboutCity = city.aboutCity;
}

City.create = function (fcity, result){
    connection.query("INSERT INTO cityinfo SET ?", fcity, function(err,res){
        if(err){ 
            console.log("error: ", err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
}




City.findById = function(id,result){
    connection.query("Select * from cityinfo where cityId = ? ", id,
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

City.findAll = function(result) {
    connection.query("Select * from cityinfo",
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

City.update = function(id, cit, result){
    connection.query("UPDATE cityinfo SET aboutCity = ? WHERE cityId = ? ",
        [cit.aboutCity, id],
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


City.delete = function(id, result) {
    connection.query("DELETE FROM cityinfo WHERE cityId = ?", [id],
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

module.exports = City;