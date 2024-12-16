const BaseController = require('./base.controller')
const { Categories } = require('../db')


class OrdersController extends BaseController {
    constructor() {
        super(Categories, 'id')
    }

    // OTHER METHODS REQUIRED


}

module.exports = new OrdersController();
