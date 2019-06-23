#!/usr/bin/node

function insert_array(array, insert_point, value) {
    return array.slice(0, insert_point + 1)
        .concat([value])
        .concat(  array.slice(insert_point + 1, array.length) );
}

var reconstructQueue = function(people) {
    people.sort( (a, b) => {
        let first_pass = b[0] - a[0];
        if (first_pass != 0) {
            return first_pass;
        }
        return a[1] - b[1];
    });

    let result = [];
    for (let i = 0; i < people.length; i++) {
        let this_height = people[i][0];
        let this_num_taller_equal = people[i][1];
        
        let inserted = false;
        for (j = 0; j < result.length; j++) {
            // Check
            // insert person[i] into results at position j if check passes
            let partial_results = result.slice(0, j);
            let z = partial_results.filter(p => p[0] >= this_height).length;
            if (z == this_num_taller_equal) {
                result = insert_array(result, j-1, people[i]);
                inserted = true;
                break;
            }
        }
        if (inserted == false) {
            // All checks failed, insert at end
            result = insert_array(result, result.length, people[i]);
        }
    }
    return result;
};



let input = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
let actual_output = reconstructQueue(input);
let expected_output = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]];
console.log("Actual and expected output", actual_output);
console.log(expected_output);
let testPassed = JSON.stringify(actual_output) == JSON.stringify(expected_output);
console.log("Test Passed", testPassed);
