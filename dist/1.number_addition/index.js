"use strict";
// Number Addition Have the function NumberAddition (str) take the str parameter,
// search for all the numbers in the string, add them together, then return that final number.
// For example: if st is "88Hello 3World!" the output should be 91.
// You will have to differentiate between single digit numbers and multiple digit numbers
// like in the example above.
// So "55Hello" and "5Hello 5" should return two different answers.
// Each string will contain at least one letter or symbol
// EXAMPLE:
// INPUT: "75Number9"
// OUTPUT: 84
// EXAMPLE:
// INPUT: "10 2One Number*1*"
// OUTPUT: 13
function NumberAddition(str) {
    let totalSum = 0;
    // string to concat the following numbers
    let concatNumber = '';
    for (let i = 0; i <= str.length; i++) {
        if (isNaN(+str[i]) || str[i] === ' ') {
            totalSum += +concatNumber;
            concatNumber = '';
        }
        else {
            concatNumber += str[i];
        }
    }
    return totalSum;
}
// console.log(NumberAddition("75Number9"));
console.log(NumberAddition("10 2One@# Number*1*"));
