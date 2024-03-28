const express = require('express');
const router = express.Router();
const sizesController = require('../controllers/sizes-controller');

// Route for creating a size
router.post('/sizes', sizesController.createSizes);

// Route for getting all sizes
router.get('/sizes', sizesController.getAllSizes);

// Route for getting a size by ID
router.get('/sizes/:id', sizesController.getSizesById);

// Route for updating a size by ID
router.put('/sizes/:id', sizesController.updateSizesById);

// Route for deleting a size by ID
router.delete('/sizes/:id', sizesController.deleteSizesById);

module.exports = router;