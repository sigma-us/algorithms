/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    if (nums.length === 0) return 0;

    let map = {0:1};
    let result = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        
        if(map[sum - k])  // there exist a key, that [hashmap-key  =  sum - k]
            result += map[sum - k];
        map[sum] = (map[sum] | 0) + 1;
    }
    return result;

};


let test = [1, 1, 1]
let k = 2;
// should be 2 [1, 1] and [1, 1]


test = [0, 1, 1, 0, 1, 1, 1, 0]
k = 2 // should be 9

// test = [0, 20, 0, 20]
// k = 20; // should be 6

console.time();
let a = subarraySum(test, k);
console.timeEnd();

console.log(a);