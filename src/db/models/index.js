import Product from "./product/index.js";
import Category from "./category/index.js";
import sequelize from '../index.js'
import User from './user/index.js'
import Comment from './comments/index.js'
import userProducts from './userProducts.js'

// Category.hasMany(Product, { foreignKey: "category_id", as: "products" });
// Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });

Product.belongsToMany(User, { through: { model: userProducts, unique: false } });
User.belongsToMany(Product, { through: { model: userProducts, unique: false } });

User.hasMany(Comment);
Comment.belongsTo(User);


//check if there foreign keys(productId, categoryId)
// if it wasn't it will  create foreign keys in categoryProducts tabel
//Product.findAll({include:Category})
Product.belongsToMany(Category, {through:"productCategory"})

Category.belongsToMany(Product, {through:"productCategory"})




// User.hasMany(userProducts);
// userProducts.belongsTo(User);

// Product.hasMany(userProducts);
// userProducts.belongsTo(Product);

// Comment.hasMany(userProducts);
// userProducts.belongsTo(Comment);

export default {Product, sequelize, Category, Comment, User }