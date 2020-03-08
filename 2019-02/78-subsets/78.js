#!/usr/bin/node
/*

*/

const subsets = nums => subsets_without_empty(nums).concat([[]]);
const subsets_without_empty = nums => {
    if (nums.length == 1) {
        return [[nums[0]]];
    }
    if (nums.length == 0) {
        return [[]];
    }
    let first_num = nums[0];

    let other_subsets = subsets_without_empty(nums.slice(1));
    console.log({other_subsets});

    return other_subsets.concat(
            other_subsets.map(x => x.concat(first_num)),
        ).concat(
            [[first_num]],
        );
};

let actual_output = subsets([1, 2, 3, 4, 5]);
let expected_output = [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
];
console.log("Got this");
console.log(actual_output);
//console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
