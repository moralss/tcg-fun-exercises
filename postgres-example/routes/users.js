const { getUsers } = require("../src/queries/users")
const { addUser } = require('../src/commands/users');



const users = (app) => {
    app.get('/users', async (req, res) => {
        try {
            const users = await getUsers();
            res.send(users)
        } catch (e) {
            console.log(e)
        }
    })


    app.post("/users", async (req, res) => {
        const { firstName, email } = req.body;
        console.log(firstName)
        try {
            await addUser(email, firstName)
            res.send(201)
        } catch (e) {
            console.log(e)
        }
    })
}




module.exports = { users }