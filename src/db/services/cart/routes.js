import { Router } from 'express'
import * as cardHandler from './handlers.js'

const cartRoutes = Router()

cartRoutes.get("/:userId", cardHandler.list)
cartRoutes.post("/:userId/:productId", cardHandler.create)
cartRoutes.delete("/:id", cardHandler.deleteCategory)


export default cartRoutes