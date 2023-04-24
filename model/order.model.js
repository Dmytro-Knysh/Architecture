var connection = require('../config/config.bd');

var Order = function (tour){
    this.orderId = tour.orderId;
    this.price = tour.price;
    this.clientId = tour.clientId;
    this.extraId = tour.extraId;
    this.tourId = tour.tourId;
}

Order.create = function (newOrder, result){
    connection.query("INSERT INTO orders SET ?", newOrder, function(err,res){
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

Order.findById = function(id,result){
    connection.query("Select * from orders where orderId = ? ", id,
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

Order.findAll = function(result) {
    connection.query("Select * from orders",
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

Order.update = function( id, tur, result){
    connection.query("UPDATE orders SET price = ? WHERE orderId = ? ",
    [tur.price, id],
    function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Order.delete = function(id, result) {
    connection.query("DELETE FROM orders WHERE orderId = ?", [id],
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

module.exports = Order;