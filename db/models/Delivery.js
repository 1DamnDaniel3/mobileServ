const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Delivery = sequelize.define('Delivery', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'orders',
            key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
    },
    delivery_address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    delivery_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.TEXT,
        defaultValue: 'not shipped',
        allowNull: false
    }
},{
    tableName: 'delivery',
    timestamps: false
});

module.exports = Delivery;