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
    dao.update(req, res, dao.table)
})

module.exports = router