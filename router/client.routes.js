const express = require('express')
const router = express.Router()
const clientController = require('../controller/client.controller');

router.get('/', clientController.findAll);

router.post('/', clientController.create);

router.get('/:id', clientController.findById);

router.post('/put/:id', clientController.update)

router.get('/delete/:id', clientController.delete);


module.exports = router;