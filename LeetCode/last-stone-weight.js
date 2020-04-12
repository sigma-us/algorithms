/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        let smash = stones.shift() - stones.shift();
        if (smash > 0) stones.push(smash);
    }

    return stones;
};



let stones = [2, 7, 4, 1, 8, 1];
lastStoneWeight(stones)