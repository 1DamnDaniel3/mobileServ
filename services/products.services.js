const { Products } = require('../db')

class ProductsServices{

    async getByCategories(category_id){

        return await Products.findAll({
            where: {category_id},
        })

    }

}

module.exports = new ProductsServices;