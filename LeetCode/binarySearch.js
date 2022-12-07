/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var start = function(nums, target, position, seen) {
    seen[position] = true;
    let current = nums[position];

    if (current === target) return position;
    else if (current < target) {
        ++position;
    }
    else if (current > target) {
        --position;
    }

    if (seen[position] === true) return -1;
    else return start(nums, target, position, seen)
}

var search = function(nums, target) {
    let mid = Math.floor((nums.length - 1)/2);
    return start(nums, target, mid, {})
};


const res1 = search([-1,0,3,5,9,12], 9) // 4

const res2 = search([-1,0,3,5,9,12], 2) // -1


console.log(res1)
console.log(res2)
