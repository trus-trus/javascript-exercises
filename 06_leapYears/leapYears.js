const leapYears = function(year) {
    let leapOrNot = year % 4;
    if (leapOrNot == 0) {
        leapOrNot = (year / 100);
        if (Number.isInteger(leapOrNot)) {
            leapOrNot = (year / 400);
            if (Number.isInteger(leapOrNot)) return true;
            else return false;
        }
        else return true;    
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
