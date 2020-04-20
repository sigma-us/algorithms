// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//     let left = 0,
//         right = nums.length - 1;
//     while (left <= right) {
//         let mid = left + (right - left / 2) | 0;  // `2.8 | 0` works like Math.floor()
//         if (nums[mid] === target) return mid;
//         else if (nums[mid] >= nums[left]) {
//             if (target >= nums[left] && target < nums[mid]) right = mid - 1;
//             else left = mid + 1;
//         } else {
//             if (target <= nums[right] && target > nums[mid]) left = mid + 1;
//             else right = mid - 1;
//         }
//     }

//     return -1;
// };

// my initial attempt below

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    if (len === 1) return nums[0] === target ? 0 : -1;
    
    let i = Math.abs(nums[0]-target) < Math.abs(nums[len-1]-target) ? nums[0] === target ? 0 : 1 : nums[len-1] === target ? len : len - 1;

    if (i === Infinity) return -1;
    if (i === 0) return i;
    if (i === len) return len-1;

    let seen = {0: true};
    seen[len] = true;

    while (seen[i] === undefined) {
        let cur = nums[i];
        seen[i] = true;

        if (cur === target) return i;
        else if (cur < target) {
            if (nums[i+1] < cur) break;
            ++i;
        } else if (cur > target) {
            if (nums[i-1] > cur) break;
            --i;
        }
    }

    return -1;
};




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
    let start = 0,
        end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            if (target <= nums[end] && target > nums[mid]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return -1;
};



let nums = [1000, 2000, 3000, 0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14],
    target = 4000;

// nums = [1, 3, 5]
// target = 3;

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;

// nums = [3, 5, 1];
// target = 5
// nums = [1]
// target = 0;
console.log(search(nums, target))

console.time();
search(nums, target);
console.timeEnd();


console.time();
search2(nums, target);
console.timeEnd();


console.time();
search(nums, target);
console.timeEnd();


console.time();
search2(nums, target);
console.timeEnd();

