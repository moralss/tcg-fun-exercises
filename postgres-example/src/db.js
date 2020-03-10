const { Pool } = require('pg');


pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'moral',
})


const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}
