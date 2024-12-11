const BaseController = require('./base.controller')
const { Users } = require('../db')


class UserController extends BaseController {
    constructor() {
        super(Users, 'id')
    }

    // OTHER METHODS REQUIRED


}

module.exports = new UserController();
