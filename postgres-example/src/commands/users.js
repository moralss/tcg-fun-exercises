const {
    getClient
} = require("../db");


const addUser = async (email, firstName) => {
    const client = await getClient();

    try {
        let statement = `INSERT INTO users (email , first_name) VALUES ($1 , $2 )`
        parameters = [email, firstName]
        const res = await client.query(statement, parameters);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
};

module.exports = {
    addUser
}