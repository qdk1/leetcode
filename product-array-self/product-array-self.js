#!/usr/bin/node

let productExceptSelf = (nums) => {

    // Fill out l array
    let total = 1;
    let l = [1];
    for (let i = 0; i < nums.length - 1; i++) {
        total *= nums[i];
        l.push(total);
    }

    // Fill out r array
    total = 1;
    let r = [1];
    for (let i = nums.length - 1; i > 0; i--) {
        total *= nums[i];
        r.push(total);
    }
    r.reverse();

    let a = [];
    for (let i = 0; i < nums.length; i++) {
        a[i] = l[i] * r[i];
    }

    return a;
};

const input = [1, 2, 3, 4];
const expected_output = [24, 12, 8, 6];
const actual_output = productExceptSelf(input);

console.log("Simple test case: ");
const eq = JSON.stringify(expected_output) == JSON.stringify(actual_output);
console.log(eq ? "PASS" : "FAIL");
