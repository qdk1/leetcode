#!/usr/bin/node
/*

*/

const countBits = num => {
    const nums = [...new Array(num + 1).keys()];
    return nums.map(x => num1s(x));
};

const num1s = n => {
    // Count the number of 1s in its binary representation
    // 1001 <-- Look at the last digit in binary, if odd, it's 1
    // Shift right, throwing away the last number
    //  100 <-- Look again
    let count = 0;
    while (n > 0) {
        if (n % 2 == 1) {
            count += 1;
        }
        n = n >> 1;
    }
    return count;
};

let actual_output = countBits(5);
let expected_output = [0, 1, 1, 2, 1, 2];
console.log("Actual and expected output", actual_output, expected_output);
