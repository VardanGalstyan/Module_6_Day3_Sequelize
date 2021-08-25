import Product from "./product/index.js";
import Category from "./category/index.js";
import sequelize from '../index.js'

Product.belongsTo(Category)
Category.hasMany(Product)

export default {Product, sequelize, Category }