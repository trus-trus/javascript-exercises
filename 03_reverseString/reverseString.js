const reverseString = function(phrase) {
    let length = phrase.length;
    let reversedPhrase = [];
    for (let i = 0, j = length - 1; i < length; i++, j--) {
        reversedPhrase[j] = phrase[i];
    }
    result = reversedPhrase.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
