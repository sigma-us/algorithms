/**
 * @param {number[]} nums
 * @return {number}
 */

// From Kadane's algorithm
var maxSubArray = function(nums) {
    let sum = Math.max(...nums);
    let maxEnd = 0;
    
    for(let i = 0; i < nums.length; i++) {
        maxEnd = maxEnd + nums[i];
        
        if(maxEnd < 0) {
            maxEnd = 0;
        } else if(maxEnd > sum) {
            sum = maxEnd
        }
    }
    
    return sum;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    let sum = nums[0];
    
    for (let i= 1; i < nums.length; ++i) {
        sum = Math.max(nums[i], sum + nums[i]);
        result = Math.max(result, sum);
    }

    return result;
};