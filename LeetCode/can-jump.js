/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function (nums) {
    let cache = {};
    let len = nums.length;

    loop1:
    for (let i = 0; i < len; i++) {
        console.log(cache, nums[i]);

        if (nums[i] + i >= len - 1) break loop1;

        if (nums[i] === 0) {
            let newI = i;

            loop2:
            for (let j = i + 1; j < len; j++) {
                // console.log(j, cache[j]);
                if (cache[j]) {
                    // console.log('hit');
                    newI = j;
                    break loop2;
                }
            }

            if (newI > i) {
                continue;
            } else return false;
        }

        for (let x = nums[i] + i; x > 0; --x) {
            console.log('nums', x)
            cache[x] = true;
        }
    }


    return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    for(let i=0;i<nums.length;i++) {
        if(i>maxReach) return false
        maxReach = Math.max(maxReach,i+nums[i])
    }
    return true
};




let test = [2, 3, 1, 1, 4];
test = [3, 0, 8, 2, 0, 0, 1];

// test = [3, 2, 1, 0, 4];
// test = [2, 0, 2, 0, 1];


console.log(canJump(test));