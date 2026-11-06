class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output = '';
        for (let str of strs) {
            // output += str.length + '#'
            for (let i = 0 ; i < str.length ; i++) {
                output += str.charCodeAt(i) + ','
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
        for(let encodedWord of str.split('%')){
            // const [lenStr, charString] = encodedWord.split('#')
            const codes = encodedWord.split(',').filter(s => s.length > 0);
            const chars = codes.map((char)=>String.fromCharCode(Number(char)))
            output.push(chars.join(''))
        }
        output.pop()
        return output
    }
}
