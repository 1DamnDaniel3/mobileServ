const BaseController = require('./base.controller')
const { Products } = require('../db')


class ProductsController extends BaseController {
    constructor() {
        super(Products, 'id')
    }

    // OTHER METHODS REQUIRED


}

module.exports = new ProductsController();
