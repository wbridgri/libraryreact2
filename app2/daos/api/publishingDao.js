const con = require('../../config/dbconfig')
const { purge } = require('../../routes/router')

const publishingDao = {
    table: 'publisher',
    findPublisher:(res, table)=>{
        con.query(
            `SELECT * FROM publisher;`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(console.log(`DAO ERROR: ${table}`, error))
                }
            }
        )
    },

    sort:(res, table)=>{
        con.query(
            `SELECT * FROM publisher
            ORDER BY publisher;`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(console.log(`DAO ERROR: ${table}`, error))
                }
            }
        )
    },

    findBookByPublisher:(res, table, id)=>{
        con.query(
            `SELECT b.book_id, b.title, a.author_id, p.pub_id, b.copyright_year, b.edition, b.edition_year, f.format_id, b.binding, b.rating, b.language, b.num_pages, b.cover_image, b.qty
            FROM book b
            JOIN author a USING (author_id)
            JOIN publisher p USING (pub_id)
            JOIN format f USING (format_id)
            WHERE p.pub_id = ${id}
            ORDER by b.title;`,
            (error, rows) =>{
                if(!error){
                res.json(rows)
                } else {
                    console.log(console.log(`DAO ERROR: ${table}`, error))
                }
            }
        )
    }

}


module.exports = publishingDao