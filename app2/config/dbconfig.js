const mysql = require('mysql2')

function getDbConfig() {
    if (process.env.MYSQL_URL) {
        return {
            uri: process.env.MYSQL_URL,
            connectionLimit: 10,
            ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined
        }
    }

    if (process.env.DATABASE_URL) {
        return {
            uri: process.env.DATABASE_URL,
            connectionLimit: 10,
            ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined
        }
    }

    const host =
        process.env.DB_HOST ||
        process.env.MYSQLHOST ||
        process.env.MYSQL_HOST ||
        'localhost'

    const user =
        process.env.DB_USER ||
        process.env.MYSQLUSER ||
        process.env.MYSQL_USER ||
        'root'

    const password =
        process.env.DB_PASSWORD ||
        process.env.MYSQLPASSWORD ||
        process.env.MYSQL_PASSWORD ||
        'rootroot'

    const database =
        process.env.DB_NAME ||
        process.env.MYSQLDATABASE ||
        process.env.MYSQL_DATABASE ||
        'librarydb'

    const port = Number(
        process.env.DB_PORT ||
        process.env.MYSQLPORT ||
        process.env.MYSQL_PORT ||
        3306
    )

    return {
        connectionLimit: 10,
        host,
        user,
        password,
        database,
        port,
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : undefined
    }
}

const dbConfig = getDbConfig()
const pool = mysql.createPool(dbConfig)

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message)
        if (dbConfig.host === 'localhost' || dbConfig.host === '127.0.0.1') {
            console.error(
                'Backend is using localhost for MySQL. On Railway, add a MySQL service and link its variables to this service.'
            )
        }
        return
    }

    const host = dbConfig.host || '(from connection URL)'
    const database = dbConfig.database || '(from connection URL)'
    console.log(`Database connected: ${host} / ${database}`)
    connection.release()
})

module.exports = pool
