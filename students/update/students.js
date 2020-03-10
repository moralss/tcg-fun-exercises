const { getClient } = require("../db");
const updateStudents = async (name, id) => {

    const client = await getClient();
    try {
        let statement = `update students set first_name = $1 where id = $2;`
        let parameters = [name, id]
        const res = await client.query(statement, parameters);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
}


module.exports = { updateStudents }