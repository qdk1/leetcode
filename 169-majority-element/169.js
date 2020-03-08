#!/usr/bin/node
/*
169
*/

/*
[5, 4, 4, 2, 6, 3, 5, 5, 5, 5, 5, 5]
                               ^
m = 5
i = 1
*/

const majorityElement = nums => {
    let i = 0;
    let m = null;
    for (let a = 0; a < nums.length; a++) {
        if (i == 0) {
            m = nums[a];
            i = 1;
        } else if (m == nums[a]) {
            i += 1;
        } else {
            i -= 1;
        }
    }
    return m;
};

let actual_output = majorityElement([2,2,1,1,1,2,2]);
let expected_output = 2;
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
