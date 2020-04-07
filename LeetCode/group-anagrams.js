/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let len = strs.length;
    let hash = {};
    
    for (len; --len >= 0;) {
        let cur = strs[len]
        let letters = cur.split('').sort();
        
        hash[letters] ? hash[letters].push(cur) : hash[letters] = [cur];
    }
    
    return Object.values(hash);
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams2 = (strs) => {
    const resp = new Array(),
          termsGrouped = new Map();
    
    strs.forEach(term => {
        const hashed = hash(term);
        if(!termsGrouped.has(hashed)) termsGrouped.set(hashed, new Array());
        termsGrouped.get(hashed).push(term);
    });
    
    termsGrouped.forEach(terms => {
        resp.push(terms);
    });
    
    return resp;
};

const hash = (term) => {
    const primeLetterNumbers = [
        2, 3, 5, 7, 11, 13, 
        17, 19, 23, 29, 31, 37, 
        41, 43, 47, 53, 59, 61, 
        67, 71, 73, 79, 83, 89, 
        97, 101
    ];
    
    let accum = 1;
    for(let letter of term) {
        const primeIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0);
        const primeMapping = primeLetterNumbers[primeIndex];      
        console.log(primeIndex, primeMapping)
        accum *= primeIndex;
    }
    
    return accum;
};



let test = ["eat","tea","tan","ate","nat","bat"];
console.time();
groupAnagrams(test);
console.timeEnd();

console.time();
let ans = groupAnagrams2(test);
console.timeEnd();
console.log(...ans)
