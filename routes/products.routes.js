const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

//CRUD 

router.post('/products/add', (req, res) => productsController.create(req, res));
router.get('/products', (req, res) => productsController.getAll(req, res));
router.get('/products/:id', (req, res) => productsController.getOne(req, res));
router.put('/products/:id', (req, res) => productsController.updateData(req, res));
router.delete('/products/:id', (req, res) => productsController.delete(req, res));

// OTHER

router.post('/products/getByCategories', (req, res) => productsController.getProductsByCategories(req, res));
router.post('/products/getByName', (req, res) => productsController.getProductsByName(req, res));


module.exports = router;