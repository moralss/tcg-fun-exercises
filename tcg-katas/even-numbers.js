const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 40, 20];


const getAllEvenNumbers = (numbers) => {
    var evenNumbers = [];

    for (var i in numbers) {
        if (numbers[i] / 2) {
            evenNumbers.push(numbers[i]);
            return evenNumbers;
        };
    }
}


const getAllEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 == 0);
}

console.log(getAllEvenNumbers(numbers));