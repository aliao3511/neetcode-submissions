class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashTable = {}
        
        for (const s of strs) {
            const key = this.getKey(s);
            if (hashTable[key] == null) hashTable[key] = [];
            hashTable[key].push(s)
        }

        return Object.values(hashTable)
    }

    getKey(str: string): string {
        const counts = new Array(26).fill(0);
        for (const c of str) {
            counts[this.getLetterIdx(c)] += 1; 
        }

        return counts.join(',');
    }

    getLetterIdx(c: string): number{
        if (c.length !== 1) {
            throw new Error('c must be a single character')
        }

        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}
