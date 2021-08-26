import { Router } from 'express'
import * as commentHandlers from './handlers.js'

const commentRoutes = Router()

commentRoutes.get("/", commentHandlers.list)
commentRoutes.get("/:id", commentHandlers.single)
commentRoutes.post("/", commentHandlers.create)
commentRoutes.put("/:id", commentHandlers.update)
commentRoutes.delete("/:id", commentHandlers.deleteComment)


export default commentRoutes