class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output = '';
        for (let i in strs) {
            const str = strs[i]
            for (let j = 0 ; j < str.length ; j++) {
                output += ',' + str.charCodeAt(j)
            }
            output += '%';
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const output: string[] = [];

        if (str.length == 0) return [];

        for(let encodedWord of str.split('%').slice(0,-1)){
            // const [lenStr, charString] = encodedWord.split('#')
            const chars = encodedWord.split(',').slice(1).map((char)=>String.fromCharCode(Number(char)))
            output.push(chars.join(''))
        }
        return output;
    }
}
