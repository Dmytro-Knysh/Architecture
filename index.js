const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//!Щоб на сервері бачити усі рішення 
app.use(express.static("."));

const orderRoutes = require('./router/order.routes'); 
const tourRoutes = require('./router/tour.routes'); 
const cityRoutes = require('./router/city.routes');
const clientRoutes = require('./router/client.routes');
const extraRoutes = require('./router/extra.routes');

app.get('/', (req, res) => {
    //res.status(200).json("Сервер працює123");
    res.render('index.ejs');
});

app.use('/api/order', orderRoutes);
app.use('/api/tour', tourRoutes);
app.use('/api/city', cityRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/extra', extraRoutes); 

app.listen(PORT, () => console.log("SERVER START!!!"));
