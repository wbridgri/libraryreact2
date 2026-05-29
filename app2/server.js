const express = require('express')
const server = express()
const router =require('./routes/router')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 3001


//Handle security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptScr": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors({
    origin: process.env.CLIENT_URL || 'https://libraryreact2-production.up.railway.app'
}))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', router)

server.listen(PORT, ()=> console.log(`${PORT} is my favorite number`))