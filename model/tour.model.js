var connection = require('../config/config.bd');

var Tour = function (tour){
    this.tourId = tour.tourId;
    this.country = tour.country;
    this.cityId = tour.cityId;
    this.transportType = tour.transportType;
    this.price = tour.price;
    this.description = tour.description;
    this.capacity = tour.capacity;
    this.tourType = tour.tourType;
}

Tour.create = function (newTour, result){
    connection.query("INSERT INTO tours SET ?", newTour, function(err,res){
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

Tour.findById = function(id,result){
    connection.query("Select * from tours where tourId = ? ", id,
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

Tour.findAll = function(result) {
    connection.query("Select * from tours",
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

Tour.update = function(id,tur, result){
    console.log(id);
    console.log(tur);
    connection.query("UPDATE tours SET price = ? WHERE tourId = ? ",
        [tur.price, id],
        function (err, res){
            if(err){
                console.log("error: ", err);
                result(null,err);
            }
            else{
                result(null, res);
            }
        });
};


Tour.delete = function(id, result) {
    connection.query("DELETE FROM tours WHERE tourId = ?", [id],
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

module.exports = Tour;