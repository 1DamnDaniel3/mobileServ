const { Cart, Products } = require('../db')

class CartServices{

    async getUserCart(user_id){
        return await Cart.findAll({
            where: {user_id},
            include: [{
                model: Products
            }]
        })
    }

}

module.exports = new CartServices;