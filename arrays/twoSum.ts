function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];

        if (map.has(remainder)) {
            return [map.get(remainder)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}

twoSum([2,7,11,15], 9); // Returns [0, 1] because nums[0] + nums[1] == 9