import { Router } from 'express'
import * as categoryHandlers from './handlers.js'

const categoryRoutes = Router()

categoryRoutes.get("/", categoryHandlers.list)
categoryRoutes.get("/:id", categoryHandlers.single)
categoryRoutes.post("/", categoryHandlers.create)
categoryRoutes.put("/:id", categoryHandlers.update)
categoryRoutes.delete("/:id", categoryHandlers.deleteCategory)


export default categoryRoutes