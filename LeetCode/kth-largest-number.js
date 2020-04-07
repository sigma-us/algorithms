const kLargestNumber = (nums, k) => {
    nums = nums.sort((a, b) => a-b);

    return nums[nums.length - k]
}

let nums = [5, 7, 2, 3, 4, 
    1, 6];
let k = 3;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let len = nums.length;
    
    while (left <= right) {
        let pivotIndex = partition(nums, left, right);

        if (pivotIndex === len - k) {

            return nums[pivotIndex];
        } else if (pivotIndex > len - k) {
            right = pivotIndex - 1;
        } else {
            left = pivotIndex + 1;
        }
    }
    
    return -1;
};


const partition = (arr, low, high) => {
    let pivot = arr[high];
    let index = low;
    
    for (let j = low; j <= high; ++j) {
        if (arr[j] < pivot) {
            [arr[index], arr[j]] = [arr[j], arr[index]];
            // let b = arr[index];
            // arr[index] = arr[j];
            // arr[j] = b;
            index = index + 1;
        }
    }
    [arr[index], arr[high]] = [arr[high], arr[index]];
    // let c = arr[index];
    // arr[index] = arr[high];
    // arr[high] = c;
    
    return index;
}

let nums2 = [3,2,3,1,2,4,5,5,6];
let nums3 = [3,2,1,5,6,4];

// console.log(kLargestNumber(nums2, 4));
console.log(findKthLargest(nums3, 2));
console.log(findKthLargest(nums2, 4));
