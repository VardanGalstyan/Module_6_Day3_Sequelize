import Product from "./product/index.js";
import Category from "./category/index.js";
import User from './user/index.js'
import Comment from './comments/index.js'
import Cart from './cart/index.js'


User.hasMany(Comment);
Comment.belongsTo(User);

Product.hasMany(Comment)
Comment.belongsTo(Product)

// - - - -   C A R T    S E C T I O N  - - - - - -

Product.belongsToMany(User, { through: { model: Cart, unique: false } });
User.belongsToMany(Product, { through: { model: Cart, unique: false } });

Product.hasMany(Cart)
Cart.belongsTo(Product)

User.hasMany(Cart)
Cart.belongsTo(User)

// - - - -E N D    O F    C A R T    S E C T I O N  - - - - - -

export default { Product, Category, Comment, User, Cart }