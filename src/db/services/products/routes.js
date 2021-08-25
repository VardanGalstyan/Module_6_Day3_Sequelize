import { Router } from 'express'
import * as productHandlers from './handlers.js'

const productRoutes = Router()

productRoutes.get("/", productHandlers.list)
productRoutes.get("/:id", productHandlers.single)
productRoutes.post("/", productHandlers.create)
productRoutes.put("/:id", productHandlers.update)
productRoutes.delete("/:id", productHandlers.deleteProduct)


export default productRoutes