const removeFromArray = function(x,...args) {
    let temp = [];
    for (let i = 0; i < x.length; i++){
        let n = x[i];
        if (!args.includes(n)){
            temp.push(n);
        }
    }

    return temp;
}

console.log(removeFromArray([1,2,3,'a','b'], 3, 1, 'a'));

// Do not edit below this line
module.exports = removeFromArray;
  