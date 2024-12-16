const { Orders, OrderItems, Products, Cart } = require('../db')

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
    };

    async makeOrder(user_id, total_price){
        return await Orders.create({
            user_id: user_id,
            total_price: total_price
        });
    };
}

module.exports = new OrdersService;