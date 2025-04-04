const repeatString = function(phrase, number) {
    if (number < 0) return "ERROR"
    let originalPhrase = "";
    for (let i = 0; i < number; i++) {
        originalPhrase = originalPhrase + phrase;
    }
    return originalPhrase;
};

// Do not edit below this line
module.exports = repeatString;
