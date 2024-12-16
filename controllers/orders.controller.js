const BaseController = require('./base.controller')
const OrdersService = require('../services/orders.services')
const CartServices = require('../services/cart.services')
const { Orders } = require('../db')


class OrdersController extends BaseController {
    constructor() {
        super(Orders, 'id')
    }

    // OTHER METHODS REQUIRED

    async getUsersOrders(req, res){

        try{
            const { id } = req.body;

            const orderData = await OrdersService.getOneUserOrders(id);
            
            if(!orderData) {
                return res.status(401).json({message: "Orders not found"});
            }

            return res.status(200).json({orderData})
        } catch(error){
            return res.status(500).json({message: "Internal server error", error: error.message});
        }
        
    };

    // TO CREATE ORDER FROM CART
    async orderFormation(req, res){

        try{
            const { user_id } = req.body;
            const cartData = await CartServices.getUserCart(user_id);

            if(!cartData) {
                return res.status(401).json({message: "Cart not found"});
            }

            const total_price = cartData.reduce((total, item) => {
                const price = parseFloat(item.product.price);
                return total + price;
            }, 0);

            const orderData = await OrdersService.makeOrder(user_id, total_price); // create Order
            await CartServices.clearCart(user_id); // clear cart
            
            



            return res.status(200).json({orderData})
        } catch(error){
            return res.status(500).json({message: "Internal server error", error: error.message});
        }

    }


}

module.exports = new OrdersController();
