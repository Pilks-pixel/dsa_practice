function maxSubArray(nums: number[]): number {
    let largestSum :number = nums[0];
    let currentSubArr = 0;

    for (let i = 0;i < nums.length; i++) {
        
        currentSubArr = Math.max(currentSubArr + nums[i], nums[i])
        largestSum = Math.max(currentSubArr, largestSum)
    }

    return largestSum
};

// Kadane's Algorithm
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // Returns 6 because [4,-1,2,1] has the largest sum 6
// Explanation: The contiguous subarray [4,-1,2,1] has the largest sum = 6.
// Greedy (Best solution at every step) & Dynamic Programming approach (storing results of subproblems to avoid recomputation)