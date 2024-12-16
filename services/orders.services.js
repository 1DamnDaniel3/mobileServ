const { Orders, OrderItems, Products } = require('../db')

class OrdersService{
    async getOneUserOrders(user_id){
        return await Orders.findAll({
            where: {user_id},
            include: [{
                model: OrderItems,
                attributes: ['quantity', 'price'],
                include: [{
                    model: Products,
                }]
            }]
        }
        )
    }
}

module.exports = new OrdersService;