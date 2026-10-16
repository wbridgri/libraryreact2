const express = require('express')
const router = express.Router()
const { genreDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3001/api/genre
router.get('/', (req, res)=>{
    dao.findGenre(res, dao.table)
})

//find by genre
router.get('/genre/:id', (req, res)=>{
    dao.findBookByGenre(res, dao.table, req.params.id)
})


router.post('/genre/update/:id', (req, res)=>{
    res.status(403).json({ error: true, message: 'Updating genres is disabled is disabled' })
})

module.exports = router