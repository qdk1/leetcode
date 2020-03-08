#!/usr/bin/node

let moveZeroes = nums => {
    let moved_zeroes = 0;
    for (let i = 0; i < (nums.length - moved_zeroes); i++) {

        let rest_of_nums = nums.slice(i);
        let rest_of_zeroes = rest_of_nums.filter(x => x == 0);
        if (rest_of_nums.length == rest_of_zeroes.length) {
            break;
        }

        while (nums[i] == 0) {
            // Remove from array and stick and end
            nums.splice(i, 1);
            nums.push(0);
            moved_zeroes += 1;
        }
    }
    return nums;
};

let actual_output = moveZeroes( [0, 1, 0, 3, 12 ] );
let expected_output =  [1, 3, 12, 0, 0];
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
