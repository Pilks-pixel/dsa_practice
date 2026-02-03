
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // Input: array of numbers not sorted 
    // Contains 0's and other intergers
    //Output: Mutate array by moving 0's to end

    // Brute force - On2 time O1 space
    // Iterate over array, if element 0 add to zeroCount variable
    // Push variable contents to end of array
    // Handle getting rid of 0 - array shift will add 0n on each index 
    // This will be too slow

    // Must be at least On - need to check every element
    // add input check

    // Iterate over array with 2 pointers
    // fast pointer interates array checking for non zero values
    // slow pointer marks index to swap zero with non zero
    // if fast is non zero swap else fast++
    // after swap slow++
    // slow always points to the first zero after the last placed non-zero
    let i = 0;
    let j = 0;

   while(j < nums.length) {

    if(nums[j]) {
        if(i !== j) {
        const nonZero = nums[j]
        nums[j] = nums[i]
        nums[i] = nonZero
        }
        i++
        j++
    } else {
        j++
    }

   }

    console.log(nums)

};

// moveZeroes([0,1,0,3,12])
// moveZeroes([0])
// moveZeroes([1,0,1])
// moveZeroes([4,2,4,0,0,3,0,5,1,0])