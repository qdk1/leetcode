#!/usr/bin/node
/*

*/
let dailyTemperatures = nums => {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let this_temp = nums[i];
        let wait = 0;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] > this_temp) {
                wait = j - i;
                break;
            }
        }
        results.push(wait);
    }
    return results;
};

let actual_output = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
let expected_output = [1, 1, 4, 2, 1, 1, 0, 0];

console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
