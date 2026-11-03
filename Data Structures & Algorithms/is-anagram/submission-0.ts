class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const [sCount, tCount] = [this.getLetterCount(s), this.getLetterCount(t)]

        if (Object.keys(sCount).length !== Object.keys(tCount).length) return false;

        for (const key of Object.keys(sCount)) {
            if (sCount[key] !== tCount[key]) return false;
        }

        return true;
    }

    getLetterCount(s: string): Record<string, number>{
        const counts:Record<string, number> = {}

        for (const char of s) {
            counts[char] = (counts[char] ?? 0) + 1;
        }

        return counts;
    }
}
