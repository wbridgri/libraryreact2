const express = require('express')
const router = express.Router()
const { formatDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3001/api/format
router.get('/', (req, res)=>{
    dao.findFormat(res, dao.table)
})

router.get('/format/:id', (req, res)=>{
    dao.findBookByFormat(res, dao.table, req.params.id)
})

module.exports = router