const express = require('express')
const server = express()
const router =require('../app2/routes/router')
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

server.use(cors()).use(express.json()).use(express.urlencoded({
    extended: true
}))

server.use('/', router)

server.listen(PORT, ()=> console.log(`${PORT} is my favorite number`))