#!/usr/bin/node --harmony
/*
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 

*/

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
    }
});

const generateParenthesis = n => {
    if (n == 1) {
        return ["()"];
    }

    return dedupe(
        add_left_open(generateParenthesis(n-1))
            .concat(add_left_close(generateParenthesis(n-1)))
            .concat(surround_entire(generateParenthesis(n-1)))
    );
};

const all_index_of_char = (string, char) =>
    string
        .split('')
        .map((x,i) => [x, i])
        .filter( ([x,i]) => x == char)
        .map( ([x,i]) => i);

const insert_at = (str, index, addme) => str.slice(0, index) + addme + str.slice(index);

const dedupe = myArray => [...new Set(myArray)]; 

const add_left_close = list => list.map(x => 
    all_index_of_char(x, ")")
        .map(i =>
            insert_at(x, i, "()")
        )
).flat();
const add_left_open = list => list.map(x => 
    all_index_of_char(x, "(")
        .map(i =>
            insert_at(x, i, "()")
        )
).flat();

const surround_entire = list => list.map(x => `(${x})`);

let actual_output = generateParenthesis(3);
let expected_output = [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
];
actual_output.sort();
expected_output.sort();
console.log("Actual and expected output", actual_output);
console.log(expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
