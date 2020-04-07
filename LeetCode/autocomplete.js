class Node {
    constructor(children, isWord) {
        this.children = children;
        this.isWord = isWord;
    }
}

let trie = new Node({}, false);
let words = ['dog', 'dark', 'cat', 'door', 'dodge'];

const build = (trie, words) => {
    for (word of words) {
        let current = trie;
        for (char of word) {
            if (!current.children[char]) {
                current.children[char] = new Node({}, false);
            }
            current = current.children[char];
        }
        current.isWord = true;
    }

    return trie;
}



const autoComplete = (trie, prefix) => {
    let current = trie;

    for (char of prefix) {
        if (!current.children[char]) {
            return [];
        }
        current = current.children[char];
    }

    return findWordsFromNode(current, prefix);
}

const findWordsFromNode = (node, prefix) => {
    let words = [];

    if (node.isWord) {
        words.push(prefix);
    }
    for (char in node.children) {
        words.push(...findWordsFromNode(node.children[char], prefix + char))
    }

    return words;
}

trie = build(trie, words);
console.log(autoComplete(trie, 'do'));