/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let map = {};

    for (let i = 0; i < arr.length; ++i) {
        map[arr[i]] = map[arr[i]] ? ++map[arr[i]] : 1;
    }
    let count = 0;

    for (let key in map) {
        if (map[Number(key)+1]) {
            count += map[key];
        }
    }

    return count;
};

const countElements2 = (arr) => {
    const counts = new Uint16Array(1001);
    console.log(counts);
    let ret = 0;
    for (const val of arr) {
      counts[val - 1] && !counts[val] && (ret += counts[val - 1]);
      counts[val + 1] && ++ret;
      ++counts[val];
    }
    return ret;
  };

let test = [1,2,3];
// test = [1,1,3,3,5,5,7,7];
// test = [1,3,2,3,5,0];
test = [1,1,2,2];
test = [2,9,0,7,6,2,7,7,0];
// test = [1,1,3,3,5,5,7,7];

console.time();
let ans = countElements(test);
console.timeEnd();
console.log(ans);


console.time();
let ans2 = countElements2(test);
console.timeEnd();
console.log(ans2);

