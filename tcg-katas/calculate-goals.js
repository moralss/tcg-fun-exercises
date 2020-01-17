const players = [
    { name: "kaka", goals: 7 },
    { name: "rashord", goals: 6 },
    { name: "pogba", goals: 10 },
]

function calculateTotalGoals(players) {
    var totalGoals = 0;
    for (var player of players) {
        totalGoals += player.goals;
    }

    return totalGoals;
}

console.log(calculateTotalGoals(players));
console.log(calculateTotalGoals(players));