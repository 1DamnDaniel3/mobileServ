const BaseController = require('./base.controller')
const UserServices = require('../services/user.services')
const { Users } = require('../db')


class UserController extends BaseController {
    constructor() {
        super(Users, 'id')
    }

    // OTHER METHODS REQUIRED

    async findUserByEmail(req, res){

        try{

            const {email} = req.body;
            const userData = await UserServices.getUserByEmail(email);

            if(!userData){
                return res.status(401).json({message: "User not found"});
            }

            return res.status(200).json({message: 1})

        }catch(error){
            return res.status(500).json({message: "Internal server error", error: error.message})
        }

    }


}

module.exports = new UserController();
