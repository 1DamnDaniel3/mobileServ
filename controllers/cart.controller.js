const BaseController = require('./base.controller')
const CartServices = require('../services/cart.services')
const { Cart } = require('../db')

class CartController extends BaseController{
    constructor(){
        super(Cart, 'id')

    }

    async findUsersCart(req, res){

        try{

            const { user_id } = req.body;
            const cartData = await CartServices.getUserCart(user_id);

            if(!cartData){
                return res.status(401).json({message: "No such user_id"})
                
            }

            return res.status(200).json({cartData});

        }catch(error){
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }

    };

    async deleteFromUserCart(req, res){

        try{

            const { user_id, product_id } = req.body;
            const cartData = await CartServices.deleteFromCart(user_id, product_id);

            if(!cartData){
                return res.status(401).json({message: "No such user_id or product_id"})
                
            }

            return res.status(200).json({message: "product was deleted successfuly"});

        }catch(error){
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }

    };


}

module.exports = new CartController;