const express = require('express')
const router = express.Router()
const tourController = require('../controller/tour.controller');

router.get('/', tourController.findAll);

router.post('/', tourController.create);

router.get('/:id', tourController.findById);

router.put('/:id', tourController.update);

router.delete('/:id', tourController.delete);

module.exports = router;