import { Router } from 'express'
import * as userHandlers from './handlers.js'

const userRoutes = Router()

userRoutes.get("/", userHandlers.list)
userRoutes.get("/:id", userHandlers.single)
userRoutes.post("/", userHandlers.create)
userRoutes.put("/:id", userHandlers.update)
userRoutes.delete("/:id", userHandlers.deleteUser)


export default userRoutes