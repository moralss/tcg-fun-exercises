const express = require("express");
const app = express();
const { students } = require("./routes/students");
const bodyParser = require("body-parser")

app.use(bodyParser())

students(app);
app.listen(3002, () => {
    console.log("server running on port 3002")
})