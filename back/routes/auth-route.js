const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const userController = require('../controllers/auth-controller');



router.post('/register', userController.register);


router.post('/login', userController.login);


router.get('/me', authenticate, userController.getme);


router.post('/admin/login', userController.adminLogin);

module.exports = router;
