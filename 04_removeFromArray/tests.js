// spread operator // reset parameter // stuff


// this shows how the spread operator is used to add the values of one array to another array...
// const odd = [1,2,3,4]
// const combined = [6,7,8, ...odd]
// console.log(combined)
// // Headers, the three dots unpacks the elements of the odd array, and adds them 
// to the combined array as we would expect.

// In the case we are using the spread operator, it is actually used as a 'rest parameter'
// --> This is important
// --> instead of unpacking an Array, it instead stores INTO an Array, a list of unlimited numbers
// ----> Therefore it is important that we only use the rest parameter at tge end of the 
// argument list. This is because it stores ALL the numbers from when it is mentioned.

const arr = [1,2,3,4,5,'a','b','c','d'];
const arrTwo = ['1',1,'a','c','e',1209];

for (let i = 0; i < arr.length; i++){
    var n = arr[i];
    if (!arrTwo.includes(n)){
        console.log(n);

    }
}

