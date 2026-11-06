class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts: Record<string,number> = {};

        for (const num of nums) {
            if (counts[num] == null) counts[num] = 0;
            counts[num] += 1;
        }

        const buckets = new Array(nums.length)
        for (let key of Object.keys(counts)) {
            if(buckets[counts[key]] == null) {
                buckets[counts[key]] = [];
            }
            buckets[counts[key]].push(key)
        }

        const output = [];
        let idx = buckets.length - 1;
        while (idx >= 0 && output.length < k) {
            if(buckets[idx] != null) {
                for (let num of buckets[idx]) {
                    output.push(num)
                }
            }
            idx -= 1
        }
        return output;
    }
}
