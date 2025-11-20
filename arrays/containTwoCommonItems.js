// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// Inputs Array of strings - non sorted, single a-z char, varied lengths
// Output: Bool

// Brute force solution nested loops - On^2

// Create a loopup with O(1) access - allowing single pass of loop checking second array for O(n) time

function containsCommonItems(array1, array2) {
    const set = new Set(array2);

    for (const item of array1) {
        if (set.has(item)) {
            return true
        } 
    }

    return false
}

// const newArray = new Array(1000000).fill('z');
// const newArray = Array.from({length: 1e6}, (_, i) => i === 999999 ? 'x' : 'z');

console.log(containsCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));
console.log(containsCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));