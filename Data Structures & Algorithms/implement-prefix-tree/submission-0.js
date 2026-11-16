class PrefixTree {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (word.length == 0) {
            this.isWord = true;
            return;
        }

        const firstLetter = word.slice(0,1);

        if (!this.children[firstLetter]) {
            this.children[firstLetter] = new PrefixTree();
        }

        this.children[firstLetter].insert(word.slice(1));
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if (word.length == 0) return this.isWord;

        const child = this.children[word[0]]
        if (child) {
            return child.search(word.slice(1));
        } else {
            return false
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        if (prefix.length == 0) return true;

        const child = this.children[prefix[0]]
        if (child) {
            return child.startsWith(prefix.slice(1));
        }

        return false;
    }
}
