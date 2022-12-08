const sumAll = function(x, y) {
    if (typeof(x) != "number") {
        return "ERROR";
    }
    if (typeof(y) != "number") {
        return "ERROR";
    }
    if (x < 0){
        return "ERROR";
    }
    if (y < 0){
        return "ERROR";
    }
    let biggerNumber = Math.max(x, y);
    let smallerNumber = Math.min(x, y);

    let sum = 0;

    for (let i = smallerNumber; i <= biggerNumber; i++){
        sum += i;
    }

    return sum;
    

};


console.log(sumAll(123, 1));


// Do not edit below this line
module.exports = sumAll;
