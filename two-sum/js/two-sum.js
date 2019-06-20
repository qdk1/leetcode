#!/usr/bin/node

var twoSum = (nums, target) => {
    for (let [i, x] of nums.entries()) {
        for (let [j, y] of nums.entries()) {
            if (i >= j) { continue; }
            if (x + y == target) {
                return [i, j];
            }
        }
    }
};

// Test Case
let nums = [2, 7, 11, 15];
let target = 9;
let actual_output = twoSum(nums, target);
let expected_output = [0, 1];

let match = JSON.stringify(actual_output) === JSON.stringify(expected_output);
console.log("Basic test case: ");
console.log(match ? "PASS" : "FAIL");
