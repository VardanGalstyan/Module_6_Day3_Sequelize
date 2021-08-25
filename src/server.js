import express from 'express'
import cors from 'cors'
import db from './db/models/index.js'
import services from './db/services/index.js'

const server = express()

server.use(express.json())
server.use(cors())

server.use(services)
const PORT = process.env.PORT


db.sequelize.sync({alter : true})
    .then(() => {
        
        server.listen(PORT,     () => console.log(`Server is up and running on PORT: ${PORT}`))
        server.on("error", (error) => console.log(`Server has failed! ${error}`))
    })
    .catch((e) => console.log(e))

