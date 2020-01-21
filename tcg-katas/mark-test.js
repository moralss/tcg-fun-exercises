const memo = ["A", "B", "C"];
const answers = ["A", "B", "C"];



function calculateMarks(answers, memo) {

    var totalMarks = 0;
    for (var i in answers) {
        if (answers[i] === memo[i]) {
            totalMarks += 1;
        }
    }

    return `total number of marks ${totalMarks}`;
}


console.log(calculateMarks(answers, memo));

