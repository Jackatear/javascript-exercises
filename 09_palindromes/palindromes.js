const palindromes = function (x) {
    // remove all none alpha-numeric characters
    // Split the string
    // reverse the string

    // we can use a regEx pattern to find all of the non-alphanumeric values
    // the pattern [\W] selects all non alpha-numeric values
    // g flag makes sure we search the whole thing, and don't stop at the start
    const reg = /[\W]/g

    let removed = x.toLowerCase().split('').join('').replace(reg, '');
    let rever = removed.split('').reverse().join('')
    console.log(removed)
    console.log(rever)
    if (rever === removed) return true;
    return false;
    console.log(removed);
};


console.log(palindromes("Animal loots foliated detail of stool lamina"));

// Do not edit below this line
module.exports = palindromes;

