const express = require('express')
const router = express.Router()
const extraController = require('../controller/extra.controller');

router.get('/', extraController.findAll);

router.post('/', extraController.create);

router.get('/:id', extraController.findById);

router.put('/:id', extraController.update);

router.delete('/:id', extraController.delete);

module.exports = router;