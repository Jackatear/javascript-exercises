const reverseString = function(string) {
    var strArray = string.split("");
    var reverseArray = strArray.reverse();
    var reverseString = reverseArray.join("");

    return reverseString;

};

console.log(reverseString("My name is Jack"))

// Do not edit below this line
module.exports = reverseString;
