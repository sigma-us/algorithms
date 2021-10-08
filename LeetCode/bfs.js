/*
You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return the sum of lengths of all good strings in words.
 
Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 
Note:
1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/

let words = ["hello","world","leetcode"];
let chars = "welldonehoneyr";


function test(words, chars) {
    let result = 0;

    loop1:
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let cache = {}

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            let found = 0;

            for (let k = 0; k < chars.length; k++) {
                if (cache[k] === true) continue;
                else {
                    if (char === chars[k]) {
                        cache[k] = true;
                        found++;
                    }
                }
            }
            
            if (found < word.length) continue loop1;
            else result += word.length;
        }
    }

    return result;
}

console.log(test(words, chars))