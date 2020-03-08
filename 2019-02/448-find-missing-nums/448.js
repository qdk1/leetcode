#!/usr/bin/node

var findDisappearedNumbers = function(nums) {
    let max = nums.length;
    let seen = {};

    // O(n) - Record which numbers we've seen
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        if (seen[num] == null) {
            seen[num] = 1;
        }
    }

    // O(n) - For each number between 1 and max, check if we saw it
    let answer = [];
    for (let i=1; i <= max; i++) {
        if (seen[i] == null) {
            answer.push(i);
        }
    }
    return answer;
};


let actual_output = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
let expected_output = [5, 6];
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);

console.log();
console.log("Extra case");
console.log( findDisappearedNumbers([1, 1]));
