/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let output = [];
    let product = 0;
    let zero = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) zero++; // count zeros
        if (i === 0 && zero === 0) product = 1; // to handle first index 0
        product *= nums[i] === 0 ? 1 : nums[i]; // if current`nums[i]` is zero use 1
    }

    // in event of 2 or more zeros we know the whole return array will equal 0's
    if (zero > 1) return nums.map((val) => 0);

    // only hits this if one or less zero's exist in nums
    for (let i = 0; i < nums.length; ++i) {
        let add = product / nums[i];
        if (zero !== 0) { 
            output[i] = nums[i] === 0 ? product : 0;
        } else {
            output[i] = add;
        }
    }

    return output;
};



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {

    let stack = [];

    let LRt = 1;
    for (let i = 0; i < nums.length; ++i) {
        // first index = 1
        // every index after is the product of the previous numbers which we set below
        stack[i] = LRt;
        LRt = LRt * nums[i];
    }

    let RLt = 1;
    for (let i = nums.length - 1; i >= 0; --i) {
        // first index in reverse = itself
        //every index after is the product of the previous numbers multiplied by itself which we set below
        stack[i] = stack[i] * RLt;
        RLt = RLt * nums[i];
    }

    return stack;
};


let nums = [1, 2, 3, 4];

console.log(productExceptSelf2(nums))