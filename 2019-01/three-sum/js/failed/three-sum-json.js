#!/usr/bin/node

    /*
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
*/

var threeSum = (nums) => {
    let results = [];
    let json_sorted_results = [];

    for (let [i, x] of nums.entries()) {
        for (let [j, y] of nums.entries()) {
            if (i >= j) { continue; }
            for (let [k, z] of nums.entries()) {
                if (i >= k || j >= k) { continue; }
                if (x + y + z == 0) {
                    let a_result = [x, y, z];

                    // Duplicate check
                    a_result.sort();
                    let a_result_json = JSON.stringify(a_result);
                    if (json_sorted_results.includes(a_result_json)) {
                        continue;
                    }

                    // Add answer
                    results.push(a_result);
                    json_sorted_results.push(a_result_json);
                }
            }
        }
    }
    return results;
};

// Test Case
let nums = [-1, 0, 1, 2, -1, -4];
let actual_output = threeSum(nums);
let expected_output = [
    [-1, 0, 1],
    [-1, -1, 2]
];

let match = JSON.stringify(actual_output) === JSON.stringify(expected_output);
console.log("Basic test case: ");
console.log(match ? "PASS" : "FAIL");
console.log(actual_output);

console.log('Trying large set..');
let big_nums = [-7,2,1,10,9,-10,-5,4,13,-9,-4,6,11,-12,-6,-9,-6,-9,-11,-4,10,10,-3,-1,-4,-7,-12,-15,11,5,14,11,-7,-8,6,9,-2,9,-10,-12,-15,2,10,4,5,11,10,6,-13,6,-13,12,-7,-9,-12,4,-9,13,-4,10,4,-12,6,4,-5,-10,-2,0,14,4,4,6,13,-9,-5,-5,-13,12,-14,11,3,10,8,11,-13,4,-8,-7,2,4,10,13,7,2,2,9,-1,8,-5,-10,-3,6,3,-5,12,6,-3,6,3,-2,2,14,-7,-13,10,-13,-2,-12,-4,8,-1,13,6,-9,0,-14,-15,6,9];
let big_output = threeSum(big_nums);
console.log(big_output);
