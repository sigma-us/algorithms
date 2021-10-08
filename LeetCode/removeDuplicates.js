/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(A) {
    let i = 1;
    for (let j = 1; j < A.length; ++j)
        if (A[j] !== A[j - 1]) 
            A[i++] = A[j];
    return i;
};

let nums = [1, 2, 2, 2, 3, 4, 5]
let k = removeDuplicates(nums)

console.log(k, nums)