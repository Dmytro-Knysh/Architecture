const express = require('express')
const router = express.Router()
const cityController = require('../controller/city.controller');

router.get('/', cityController.findAll);

router.post('/', cityController.create);

router.get('/:id', cityController.findById);

router.post('/put/:id', cityController.update)

router.get('/delete/:id', cityController.delete);


module.exports = router;