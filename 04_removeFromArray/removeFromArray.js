const removeFromArray = function(array, ...toBeRemoved) {
    arrayLength = array.length;
    toBeLength = toBeRemoved.length
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < toBeLength; j++) {
            if (array[i] === toBeRemoved[j]) {
                array.splice(i, 1);
                i--;
                arrayLength--;
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
