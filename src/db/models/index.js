import Product from "./product/index.js";
import Category from "./category/index.js";
import User from './user/index.js'
import Comment from './comments/index.js'


User.hasMany(Comment);
Comment.belongsTo(User);

Product.hasMany(Comment)
Comment.belongsTo(Product)


//check if there foreign keys(productId, categoryId)
// if it wasn't it will  create foreign keys in categoryProducts table
//Product.findAll({include:Category})
Product.belongsToMany(Category, {through:"productCategories", as: "categories"})
Category.belongsToMany(Product, {through:"productCategories", as: "products"})




export default {Product, Category, Comment, User }