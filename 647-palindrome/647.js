#!/usr/bin/node
/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
*/

var countSubstrings = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (isPalindrome(substring)) {
                count += 1;
            }
        }
    }
    return count;
};

let isPalindrome = (str) => str.slice(0,1) == str.slice(-1) && str == str.split('').reverse().join('');

let actual_output = countSubstrings("aaa");
let expected_output =  6;
console.log("Actual and expected output", actual_output, expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
