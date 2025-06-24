const con = require('../../config/dbconfig')

const daoCommom ={
    findAll: (res, table) => {
        con.query(
            `SELECT * FROM ${table};`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    } 
                } else {
                    console.log(`DAO ERROR: ${table} `, error)
                }
            }
        )
    },

    findById: (res, table, id)=>{
        con.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    } 
                } else {
                    console.log(`DAO ERROR: ${table}`, error)
                }
            }
        )
    },
    sortGeneral: (res, table)=>{
        con.query(
            `SELECT * FROM ${table} ORDER BY ${table};`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    } 
                } else {
                    console.log(`DAO ERROR: ${table}`, error)
                }
            }
        )
    },

    countAll: (res, table)=>{
        con.execute(
            `SELECT COUNT(*) count FROM ${table};`,
            (error, rows)=>{
                if(!error){
                    //do stuff
                    if(rows.length === 1){
                        res.json(...rows)
                    } else{
                        res.json(rows)
                    }
                } else {
                    // do something eles
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }, 

    create: (req, res, table)=>{

        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {

            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=>{
                    if(!error){
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log(`${table}Dao error `, error)
                    }
                }
            )
        }
    }
}


module.exports = daoCommom