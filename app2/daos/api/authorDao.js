const con = require('../../config/dbconfig')


const authorDao ={
    table: 'author',

    sort:(res, table)=>{
        con.query(
            `SELECT * FROM author
            ORDER BY author;`,
            (error, rows) =>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                        console.error(`DAO ERROR: ${table}`, error)
                        res.status(500).json({ error: true, message: 'Database error' })
                }
            }
        )
    },

    findBookByAuthor:(res, table, id)=>{
        con.query(
            `SELECT b.book_id, b.title, a.author_id, p.pub_id, b.copyright_year, b.edition, b.edition_year, f.format_id, b.binding, b.rating, b.language, b.num_pages, b.cover_image, b.qty
            FROM book b
            JOIN author a USING (author_id)
            JOIN publisher p USING (pub_id)
            JOIN format f using (format_id)
            WHERE a.author_id = ?
            ORDER BY b.title;
            `,
            [id],
            (error, rows) =>{
                if(!error) {
                    res.json(rows)
                } else {
                    console.error(`DAO ERROR : ${table}`, error)
                    res.status(500).json({ error: true, message: 'Database error' })

                }
            }
        )
    },


    

}


module.exports = authorDao