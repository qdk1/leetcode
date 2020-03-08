#!/usr/bin/node
/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231. 

My Own Notes:
    8421
    ----
9 = 1001
3 = 0011
    ---- diff? <----- XOR.   (and, or, xor). 
10= 1010 = 2 bits with 1 on.

*/
var hammingDistance = function(x, y) {
    let z = x ^ y;
    // Figure out how many 1's are in a binary representation of z.
    // This works easily, but probably isn't the fastest?
    return z.toString(2).replace(/0/g, "").length;
};

let actual_output = hammingDistance(1, 4);
let expected_output = 2;
console.log("Actual and expected output", actual_output, expected_output);
