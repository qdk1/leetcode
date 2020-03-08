#!/usr/bin/node
/*

[1, 2, 3, 4]
 ^ = 2 * 3 * 4
    ^ = 1 * 3 * 4
       ^ 1 * 2 * 4
           ^ = 1 * 2 * 3

[1, 2, 3, 4]
24 / 1
   24 /2 
       24 / 3
          24 / 4

First (Naieve) N^2
 Two loops. Too slow.

Second (Good, but not allowed) N
  Find the product of all elements in array.
  Loop over array, then divide the product by that number.

Third (Left Right)
      v
N [1, 2, 3, 4]
L [1, 1, 2, 6] O(n)
R [24,12,4, 1] O(n)
A [24,12,8,6]  O(n)
*/

const productExceptSelf = nums => {
    let a = [];
    let l = [1];
    let r = [1];

    for (let i = 0; i < nums.length - 1; i++) {
        l.push(l[l.length-1] * nums[i]);
    }
    for (let i = nums.length - 1; i > 0; i--) {
        r.push(
            r[r.length-1] * nums[i]
        );
    }
    r.reverse();

    for (let i = 0; i <= nums.length -1; i++) {
        a.push( l[i] * r[i] );
    }

    return a;
};

let actual_output = productExceptSelf([1, 2, 3, 4])
let expected_output = [24,12,8,6];
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
