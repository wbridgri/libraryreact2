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
                        console.error(`DAO ERROR: ${table}`, error)
                        res.status(500).json({ error: true, message: 'Database error' })
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
            WHERE g.genre_id = ?
            ORDER BY g.genre_id;`,
            [id],
            (error, rows) =>{
                if(!error){
                    res.json(rows)
                } else {
                    console.error(`DAO ERROR: ${table}`, error);
                    res.status(500).json({ error: true, message: "Database error" });
                }
            }
        )
    }
}


module.exports = genreDao