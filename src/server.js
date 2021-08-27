import express from 'express'
import cors from 'cors'
import services from './db/services/index.js'


const server = express()

server.use(express.json())
server.use(cors())

server.use(services)
const PORT = process.env.PORT



server.listen(PORT, () => console.log(`Server is up and running on PORT: ${PORT}`))
server.on("error", (error) => console.log(`Server has failed! ${error}`))


