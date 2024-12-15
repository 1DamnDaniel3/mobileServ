const BaseController = require('./base.controller')
const OrdersService = require('../services/orders.services')
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
        
    }


}

module.exports = new OrdersController();
