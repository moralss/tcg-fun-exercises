const students = [
    { studentName: "same", gender: "Male" },
    { studentName: "bob", gender: "Male" },
    { studentName: "same", gender: "Male" },
    // { studentName: "Kagiso", gender: "Female" }
]


function calculateGenderCount(students) {
    var maleCounter = 0;
    var femaleCounter = 0;
    for (var i in students) {
        if (students[i].gender == "Male") {
            maleCounter++;
        }
        else {
            femaleCounter++;
        }
    }

    return `total males ${maleCounter}, total female ${femaleCounter}`
}


console.log(calculateGenderCount(students))