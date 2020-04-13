/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let sum = 0;
    let max_len = 0;
    let hM = {};
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        // Add current element to sum 

        sum += nums[i] === 0 ? -1 : 1;

        // To handle sum=0 at last index 
        console.log(sum, sum === 0, max_len, ending_index)
        if (sum == 0) {
            max_len = i + 1;
        }

        // If this sum is seen before, then update max_len 
        // if required 

        if (hM[sum + n] !== undefined) {
            if (max_len < i - hM[sum + n]) {
                max_len = i - hM[sum + n];
            }
        }
        else hM[sum + n] = i;

        console.log(hM);
    }


    return max_len;
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength2 = function(nums) {
    let map = {
        0: -1
    };
    let count = 0;
    let max = 0;
    for(let i=0; i<nums.length; i++) {
        let num = nums[i];
        count += num === 0 ? -1 : 1;

        if(map[count] !== undefined) {
            console.log(i, map[count], count, map);
            max = Math.max(max, i- map[count]);
        } else {
            map[count] = i;   
        }
    }
    return max
};



let test = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];  // should be 10
// test = [ 0, 0, 1]; // should be 2
console.log(findMaxLength2(test));