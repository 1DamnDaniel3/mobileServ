const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

//CRUD 

router.post('/cart/add', (req, res) => cartController.create(req, res));
router.get('/cart', (req, res) => cartController.getAll(req, res));
router.get('/cart/:id', (req, res) => cartController.getOne(req, res));
router.put('/cart/:id', (req, res) => cartController.updateData(req, res));
router.delete('/cart/:id', (req, res) => cartController.delete(req, res));

// OTHER

router.post('/cart/getUserCart', (req, res) => cartController.findUsersCart(req, res));


module.exports = router;