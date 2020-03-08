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
var hammingDistance = (x, y) => {
    let z = x ^ y;

    // Figure out how many 1's are in a binary representation of z.
    let distance = 0;
    while (z > 0) {
        if (z % 2 == 1) {
            distance += 1;
        }
        z = z >> 1;
    }
    return distance;
};

let actual_output = hammingDistance(1, 4);
let expected_output = 2;
console.log("Actual and expected output", actual_output, expected_output);
