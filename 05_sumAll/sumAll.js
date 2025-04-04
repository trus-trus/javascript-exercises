const sumAll = function(number1, number2) {
    if (number1 > number2) {
        let temp = number2;
        number2 = number1;
        number1 = temp;
    }
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    let result = 0;
    for (let i = number1; i <= number2; i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
