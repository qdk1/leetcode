#!/usr/bin/env node

// Implementation is too slow -
// it's O(N log N), but the problem wants
// O(N log K)
const topKFrequent = (nums, k) => {
    let max5 = [];

    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (seen[num] == null) {
            seen[num] = 0;
        }
        seen[num] += 1;
    }

    let seen_entries = Object.entries(seen);
    seen_entries.sort( (a, b) => b[1] - a[1] );
    return seen_entries.slice(0, k).map(x => parseInt(x[0], 10));
};

let actual_output = topKFrequent( [1, 1, 1, 2, 2, 2, 3], 2 );
let expected_output = [1, 2];
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
