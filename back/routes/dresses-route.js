const express = require('express');
const router = express.Router();
const dressController = require('../controllers/dresses-controller');


router.post('/dresses', dressController.createDress);

router.get('/dresses', dressController.getAllDresses);


router.get('/dresses/:id', dressController.getDressById);


router.put('/dresses/:id', dressController.updateDressById);


router.delete('/dresses/:id', dressController.deleteDressById);

module.exports = router;
