const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { users } = require('./routes/users');

app.use(bodyParser.json());
app.use(cors());
users(app)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
