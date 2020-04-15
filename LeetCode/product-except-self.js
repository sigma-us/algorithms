/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let product = 0;
    let zero = 0;;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) zero++;
        if (i === 0 && zero === 0) product = 1; 
        product *= nums[i] === 0 ? 1 : nums[i];
    }
    console.log(zero)

    if (zero > 1) return nums.map((val) => 0);

    for (let i = 0; i < nums.length; ++i) {
        let add = product/nums[i];
        if (zero !== 0) {
            output[i] = nums[i] === 0 ? product : 0;
        } else {
            output[i] = add;
        }
    }

    return output;
};


let nums = [1, 2, 3, 0, 0, 4];

console.log(productExceptSelf(nums))