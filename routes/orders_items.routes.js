const express = require('express');
const router = express.Router();
const ordersItemsController = require('../controllers/order_items.controller');

//CRUD 

router.post('/ordersItems/add', (req, res) => ordersItemsController.create(req, res));
router.get('/ordersItems', (req, res) => ordersItemsController.getAll(req, res));
router.get('/ordersItems/getOne/:id', (req, res) => ordersItemsController.getOne(req, res));
router.put('/ordersItems/:id', (req, res) => ordersItemsController.updateData(req, res));
router.delete('/ordersItems/:id', (req, res) => ordersItemsController.delete(req, res));

// OTHER

router.get('/ordersItems/getTopProducts', (req, res) => ordersItemsController.topProducts(req, res));


module.exports = router;