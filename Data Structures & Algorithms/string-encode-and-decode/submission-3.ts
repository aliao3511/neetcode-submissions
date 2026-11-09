class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output = "";
        for(let str of strs) {
            output += str.length.toString() + '#' 
            output += str;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str.length == 0) return [];
        
        const output = [];
        let i,isReadingCount,lengStr,strCharsRemaining,currString;
        resetVars();
        while (i < str.length) {
            const currChar = str[i]
            if (isReadingCount) {
                if (currChar == '#') {
                    strCharsRemaining = Number(lengStr);
                    isReadingCount = false;

                    // Account for string of len 0;
                    if (strCharsRemaining == 0) {
                        output.push('');
                        isReadingCount = true;
                    }
                    
                } else {
                    lengStr += currChar;
                }
            } else {
                currString += currChar;
                strCharsRemaining -= 1;
                if(strCharsRemaining == 0) {
                    isReadingCount = true;
                    output.push(currString);
                    currString = '';
                    lengStr = '';
                }
            }
            i++;
        }

        return output;

         function resetVars() {
                i = 0;
                isReadingCount = true;
                lengStr = '';
                strCharsRemaining = 0;
                currString = '';
            }
    }
}
