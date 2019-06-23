#!/usr/bin/node
/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const singleNumber = nums => {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if (seen[x] == null) {
            seen[x] = 0;
        }
        seen[x] += 1;
    }

    for (let k of Object.keys(seen)) {
        if (seen[k] == 1) {
            return k;
        }
    }
    throw new Error("Could not find any single values");
};

let actual_output = singleNumber([4, 1, 2, 1, 2]);
let expected_output = 4;
console.log("Actual and expected output", actual_output, expected_output);
