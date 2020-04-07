/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let len = nums.length - 1;
    let num = 0;
    
    for (len; len >= 0; --len) {
        num ^= nums[len];
    }
    
    return num;
};