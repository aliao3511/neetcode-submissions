class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dict = {};
        for (const num of nums) {
            if (dict[num]) return true;

            dict[num] = true;
        }

        return false;
    }
}
