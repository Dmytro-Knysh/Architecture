var connection = require('../config/config.bd');

var Client = function (client){
    this.clientId = client.clientId;
    this.login = client.login;
    this.password = client.password;
    this.phone = client.phone;
}

Client.create = function (new_client, result){
    connection.query("INSERT INTO clients SET ?", new_client, function(err,res){
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

Client.findById = function(id,result){
    connection.query("Select * from clients where clientId = ? ", id,
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

Client.findAll = function(result) {
    connection.query("Select * from clients",
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

Client.update = function(id,cit, result){
    connection.query("UPDATE clients SET login = ?, password = ?, phone = ? WHERE clientId = ?",
        [cit.login, cit.password, cit.phone, cit.clientId, id],
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

/*Extra.update = function(tur, result){
    connection.query("UPDATE extra SET name = ?, price = ? WHERE extraId = ? ",
    [tur.tourId, tur.price],
    function (err, res){
        if(err){
            console.log("error: ", err);
            result(err,null);
        }
        else{
            result(null, res);
        }
    });
};*/

Client.delete = function(id, result) {
    connection.query("DELETE FROM clients WHERE clientId = ?", [id],
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

module.exports = Client;