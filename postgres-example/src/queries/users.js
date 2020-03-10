const {
    getClient
} = require("../db");


const getUsers = async () => {
    const client = await getClient();

    try {
        let statement = `select * from users`
        const res = await client.query(statement);
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        return;
    }
};

module.exports = {
    getUsers
};