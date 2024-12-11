// Import Sequelize instance and models
const sequelize = require('./connection');

// Import models
const Users = require('./models/User');
const Products = require('./models/Products');
const Cart = require('./models/Cart');
const Categories = require('./models/Categories');
const Delivery = require('./models/Delivery');
const OrderItems = require('./models/OrderItems');
const Orders = require('./models/Orders');

// Define model relationships

// USERS
Users.hasMany(Cart, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Cart.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(Orders, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Orders.belongsTo(Users, { foreignKey: 'user_id' });

// CATEGORIES
Categories.hasMany(Products, { foreignKey: 'category_id', onDelete: 'CASCADE' });
Products.belongsTo(Categories, { foreignKey: 'category_id' });

// PRODUCTS
Products.hasMany(Cart, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Cart.belongsTo(Products, { foreignKey: 'product_id' });

Products.hasMany(OrderItems, { foreignKey: 'product_id', onDelete: 'CASCADE' });
OrderItems.belongsTo(Products, { foreignKey: 'product_id' });

// ORDERS
Orders.hasMany(OrderItems, { foreignKey: 'order_id', onDelete: 'CASCADE' });
OrderItems.belongsTo(Orders, { foreignKey: 'order_id' });

Orders.hasOne(Delivery, { foreignKey: 'order_id', onDelete: 'CASCADE' });
Delivery.belongsTo(Orders, { foreignKey: 'order_id' });

// Export models and Sequelize instance
module.exports = {
    sequelize,
    Users,
    Products,
    Cart,
    Categories,
    Delivery,
    OrderItems,
    Orders,
};
