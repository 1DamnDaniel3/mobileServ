const { OrderItems } = require('../db');

class OrderItemsServices {
    async setOrderItems(user_id, cartItems, order_id) {
        return await OrderItems.bulkCreate(
            cartItems.map(item => ({
                product_id: item.product_id,
                user_id,
                order_id,
                price: 1,
                quantity: 1
            }))
        );
    }
}

module.exports = new OrderItemsServices();