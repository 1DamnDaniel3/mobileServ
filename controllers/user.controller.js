const BaseController = require('./base.controller')
const UserServices = require('../services/user.services')
const bcrypt = require('bcryptjs')
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
                return res.status(401).json({message: 0});
            }

            return res.status(200).json({message: 1})

        }catch(error){
            return res.status(500).json({message: "Internal server error", error: error.message})
        }

    };

    // FUNCTION TO LOGIN USERS AND GIVE THEM TOKEN
    async userLogin(req, res){
        const {email, password} = req.body;
        try {
            // find user by email
            const user = await Users.findOne({where: { email }})
            if(!user){
                return res.status(401).json({message: 'Invalid email or password'})
                
            }
            // check user password
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(401).json({message: 'Invalid password'})
            }

            return res.status(200).json({ message: 'Login_successful'});
        }catch(error){
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }


}

module.exports = new UserController();
