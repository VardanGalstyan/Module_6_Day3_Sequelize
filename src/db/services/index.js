import {Router} from 'express'
import categoryRoutes from './categories/routes.js'
import productRoutes from './products/routes.js'
import userRoutes from './user/routes.js'
import commentRoutes from './comments/routes.js'


const services = Router()

services.use("/categories", categoryRoutes)
services.use("/products", productRoutes)
services.use("/comments", commentRoutes )
services.use("/users", userRoutes)

export default services