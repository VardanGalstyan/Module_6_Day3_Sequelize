import {Router} from 'express'
import categoryRoutes from './categories/routes.js'
import productRoutes from './products/routes.js'


const services = Router()

services.use("/categories", categoryRoutes)
services.use("/products", productRoutes)

export default services