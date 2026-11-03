class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let currCount:number = 0;
        let max:number = 0

        for (let i = 0; i < nums.length ; i++) {
            if (nums[i] == 1) {
                currCount += 1;
            } else {
                max = currCount > max ? currCount : max;
                currCount = 0;
            }
        }

        return currCount > max ? currCount : max;
    }
}
