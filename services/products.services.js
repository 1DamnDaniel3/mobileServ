const { Products } = require('../db')

class ProductsServices{

    async getByCategories(category_id){

        return await Products.findAll({
            where: {category_id},
        })

    }

    async getByName(name){
        return await Products.findOne({
            where: {name}
        })
    }

}

module.exports = new ProductsServices;