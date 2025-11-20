
// input array of integers, accending order && number
// output: boolean true if a pair exists that would equal the sum

// time complexity: O(n) space complexity: O(n)

function hasPairMatchingSum(array, sum) {
    const set = new Set();

    for (const item of array) {
        if (set.has(item)) return true
        const intergerToCreatePair = sum - item
        // console.log({sum}, {intergerToCreatePair} );
        set.add(intergerToCreatePair)

    }

    return false
    
}
console.log(hasPairMatchingSum([1,2,3,9], sum = 8));
console.log(hasPairMatchingSum([1,2,4,4], sum = 8));

