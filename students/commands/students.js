const { getClient } = require("../db");
const saveStudents = async (name) => {

    const client = await getClient();
    try {
        let statement = `INSERT INTO students(first_name) VALUES ($1);`
        let parameters = [name]
        const res = await client.query(statement, parameters);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
}


module.exports = { saveStudents }