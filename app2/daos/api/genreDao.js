const con = require('../../config/dbconfig')

const genreDao = {
    table: 'genre',
    findGenre:(res, table)=>{
        con.query(
            `SELECT * FROM genre;`,
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

    findBookByGenre:(res, table, id)=>{
        con.execute(
            `SELECT b.book_id, b.title, a.author_id, p.pub_id, b.copyright_year, b.edition, b.edition_year, f.format_id, b.binding, b.rating, b.language, b.num_pages, b.cover_image, b.qty
            FROM book b
            JOIN author a USING (author_id)
            JOIN publisher p USING (pub_id)
            JOIN format f USING (format_id)
            JOIN book_to_genre bg ON b.book_id = bg.book_id
            JOIN genre g ON bg.genre_id = g.genre_id
            WHERE g.genre_id = '${id}'
            ORDER BY g.genre_id;`,
            (error, rows) =>{
                if(!error){
                    res.json(rows)
                } else {
                    console.log(console.log(`DAO ERROR: ${table}`, error))
                }
            }
        )
    },



    update:(req, res, id)=>{
    
            const data = req.body.genre_id.map(item => {
                return {"book_id": id, "genre_id": item }
            })
    
            data.forEach(obj => {
                con.execute(
                    `INSERT INTO book_to_genre (book_id, genre_id)
                    VALUES (${obj.book_id}, ${obj.genre_id});`,
                    (error, dbres)=>{
                        if(error){
                            res.send(error)
                        }
                    }
                )
            })
        }
}


module.exports = genreDao