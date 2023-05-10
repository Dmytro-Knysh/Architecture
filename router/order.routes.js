const express = require('express')
const router = express.Router()
const orderController = require('../controller/order.controller');

router.get('/', orderController.findAll);

router.post('/', orderController.create);

router.get('/:id', orderController.findById);

router.post('/put/:id', orderController.update)

router.get('/delete/:id', orderController.delete);

module.exports = router;