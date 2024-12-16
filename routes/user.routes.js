const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//CRUD 

router.post('/users/registration', (req, res) => userController.create(req, res));
router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getOne(req, res));
router.put('/users/:id', (req, res) => userController.updateData(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));

// OTHER

router.post('/users/findByEmail', (req, res) => userController.findUserByEmail(req, res));
router.post('/users/login', (req, res) => userController.userLogin(req, res));



module.exports = router;