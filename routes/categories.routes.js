const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

//CRUD 

router.post('/categories/add', (req, res) => categoriesController.create(req, res));
router.get('/categories', (req, res) => categoriesController.getAll(req, res));
router.get('/categories/:id', (req, res) => categoriesController.getOne(req, res));
router.put('/categories/:id', (req, res) => categoriesController.updateData(req, res));
router.delete('/categories/:id', (req, res) => categoriesController.delete(req, res));

// OTHER

module.exports = router;