const { Cart, Products } = require('../db')

class CartServices{

    async getUserCart(user_id){
        return await Cart.findAll({
            where: {user_id},
            include: [{
                model: Products
            }]
        })
    };

    async clearCart(user_id){
        return await Cart.destroy({
            where: {user_id}
        })
    }
}

module.exports = new CartServices;