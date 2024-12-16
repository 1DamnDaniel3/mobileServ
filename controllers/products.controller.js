const BaseController = require('./base.controller')
const ProductsServices = require('../services/products.services')
const { Products } = require('../db')


class ProductsController extends BaseController {
    constructor() {
        super(Products, 'id')
    }

    // OTHER METHODS REQUIRED

    async getProductsByCategories(req, res){

        try{
            
            const { category_id } = req.body;
            const productsData = await ProductsServices.getByCategories(category_id)

            if(!productsData){
                return res.status(401).json({message: "No such category_id"})
            }

            return res.status(200).json({productsData});

        }catch(error){
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }

    }
    

}

module.exports = new ProductsController();
