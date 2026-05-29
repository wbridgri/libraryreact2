const express = require('express')
const router = express.Router()

router.use(express.static('public'))

const endpoints = ['book', 'author', 'format', 'genre', 'publishing']

endpoints.forEach(endpoint =>{
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Route`))
})

router.get('/api', (req, res) => {
    res.json({
        'Book': '/api/book',
        'Author': '/api/author',
        'Publishing Company': '/api/publishing',
        'Format': '/api/format',
        'Genre': '/api/genre'
    })
})



module.exports = router