const { Sequelize, col } = require('sequelize');
const { OrderItems, Products } = require('../db');

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

    async getTopProducts() {
        return await OrderItems.findAll({
            attributes: [
                'product_id',
                [Sequelize.fn('COUNT', Sequelize.col('product_id')), 'order_count']
            ],
            include: [
                {
                    model: Products,
                    attributes: ['name'],
                }
            ],
            group: ['product_id', 'product.id'],
            order: [[Sequelize.fn('COUNT', Sequelize.col('product_id')), 'DESC']],
            limit: 10,
            raw: true // Результаты будут простыми объектами
        });
    }
}

module.exports = new OrderItemsServices();