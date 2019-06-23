#!/usr/bin/node
/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const singleNumber = nums => {
    return nums.reduce( (acc, value) => acc ^ value, 0 );
};

let actual_output = singleNumber([4, 1, 2, 1, 2]);
let expected_output = 4;
console.log("Actual and expected output", actual_output, expected_output);
