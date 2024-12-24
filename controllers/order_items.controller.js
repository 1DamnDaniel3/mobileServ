const BaseController = require('./base.controller')
const OrderItemsServices = require('../services/order_items.services')
const { OrderItems } = require('../db')


class OrdersItemsController extends BaseController {
    constructor() {
        super(OrderItems, 'id')
    }

    // OTHER METHODS REQUIRED
    async topProducts(req, res){
        try{
           
            const orderItemsData = await OrderItemsServices.getTopProducts();
            
            if(!orderItemsData){
                return res.status(401).json({message: 'Error with OI query'})
            };

            const names = orderItemsData.map(item => item['product.name'] || "Unknown");
            const count = orderItemsData.map(item => {
                const count = parseInt(item.order_count, 10);
                return isNaN(count) ? 0 : count; // Возвращаем 0, если преобразование не удалось
            });


            return res.status(200).json({names, count})
            
        }catch(error){
            return res.status(500).json({message: "Internal server error", error: error.message});

        }
    }

}

module.exports = new OrdersItemsController();
