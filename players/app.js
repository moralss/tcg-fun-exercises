const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser());


const port = process.env.PORT || 3001;
const players = [
    { id: 1, name: "marital", team: 'MU', "goals": 20 },
    { id: 2, name: "rashford", team: 'MU', "goals": 10 }
]


app.get("/players", (req, res) => {
    res.send(players);
})

app.get("/top-players", (req, res) => {
    const topPlayers = players.filter(player => player.team === req.query.team).filter(player => player.goals > req.query.goals);
    res.send(topPlayers)
})

app.get("/players/:id", (req, res) => {
    res.send(players.filter(player => player.id == req.params.id));
})

app.post("/players", (req, res) => {
    const newId = players[players.length - 1].id + 1;
    if (req.body.name === "") {
        return res.json({ error: "please send a name" });
    }
    players.push({ ...req.body, id: newId });
    res.send("dkd")
})

app.delete("/players/:id", (req, res) => {
    const { id } = req.params;
    for (var i in players) {
        if (players[i].id == id) {
            players.splice(i, 1);
        }
    }
    res.send(200);
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})



