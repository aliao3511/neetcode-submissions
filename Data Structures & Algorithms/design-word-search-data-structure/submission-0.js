class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    charCodeToIdx(char) {
        return char.charCodeAt(0) - 97;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currNode = this.root;
        for (let c of word) {
            const charIdx = this.charCodeToIdx(c[0]);
            if(!currNode.children[charIdx]){
                currNode.children[charIdx] = new TrieNode();
            }
            currNode = currNode.children[charIdx];
        }

        currNode.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, j, root) {
        let curNode = root;

        for (let i = j; i < word.length; i++) {
            const char = word[i];
            if (char == '.') {
                for (let child of curNode.children) {
                    if (child !== undefined && child !== null && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const child = curNode.children[this.charCodeToIdx(char)];
                if (child == null) {
                    return false;
                } else {
                    curNode = child;
                }
            }
        }

        return curNode.isWord;
    }
}
