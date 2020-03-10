const { getStudents } = require("../queries/students");
const { saveStudents } = require("../commands/students");
const { updateStudents } = require("../update/students");
const students = (app) => {

    app.get("/students", async (req, res) => {
        try {
            const students = await getStudents()
            return res.send(students);
        } catch (e) {
            console.log(e)
        }
    })

    app.post("/students", async (req, res) => {
        try {
            await saveStudents(req.body.firstName)
            return res.send(201);
        } catch (e) {
            console.log(e)
        }
    })

    app.put("/students/:id", async (req, res) => {
        try {
            await updateStudents(req.body.firstName, req.params.id)
            return res.send(201);
        } catch (e) {
            console.log(e)
        }
    })
}


module.exports = { students }
