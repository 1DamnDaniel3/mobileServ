const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    }
  },{
    tableName: 'categories',
    timestamps: false
});
  
  module.exports = Categories;