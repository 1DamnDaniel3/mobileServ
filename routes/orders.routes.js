const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');

//CRUD 

router.post('/orders/add', (req, res) => ordersController.create(req, res));
router.get('/orders', (req, res) => ordersController.getAll(req, res));
router.get('/orders/:id', (req, res) => ordersController.getOne(req, res));
router.put('/orders/:id', (req, res) => ordersController.updateData(req, res));
router.delete('/orders/:id', (req, res) => ordersController.delete(req, res));

// OTHER

router.post('/orders/findOneUser', (req, res) => ordersController.getUsersOrders(req, res));


module.exports = router;