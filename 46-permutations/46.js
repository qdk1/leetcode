#!/usr/bin/node
/*
Given a collection of distinct integers, return all possible permutations.

*/

let permute = nums => {
    if (nums.length == 0 || nums == null) {
        throw new Error("Unexpected input");
    }
    if (nums.length == 1) {
        return [[ nums[0] ]];
    }
    
    let results = [];
         
    for (let i = 0; i < nums.length; i++) {
        let first_digit = nums[i];
        let nums_copy = copy(nums);
        nums_copy.splice(i, 1);

        let permutations = permute(nums_copy);
        let these_results = permutations.map( x =>
            [first_digit].concat(x)
        );
        results = results.concat(these_results);
    }
    return results;
};

var copy = array => JSON.parse(JSON.stringify(array));

let actual_output = permute([1, 2, 3]);
let expected_output = [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
];

console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
