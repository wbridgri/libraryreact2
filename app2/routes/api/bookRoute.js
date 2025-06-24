const express = require('express')
const router = express.Router()
const { bookDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3001/api/book
router.get('/', (req, res)=>{
    dao.findBook(res, dao.table)
})


//find by rating
router.get('/rating/:rating', (req, res)=>{
    dao.findByRating(res, dao.table, req.params.rating)
})

//find by binding
router.get('/binding/:binding', (req, res)=>{
    dao.findByBinding(res, dao.table, req.params.binding)
})



//sort
router.get('/sort', (req, res)=>{
    dao.sort(res, dao.table)
})


//findId
router.get('/:id', (req, res)=>{
    dao.findBookById(res, dao.table, req.params.id)
})

//post => localhost:3001/api/book/post
router.post('/post', (req, res)=>{
    dao.create(req, res, dao.table)
})


module.exports = router