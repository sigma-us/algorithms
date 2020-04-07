/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;

    for (let i = 0; i < prices.length;) {
        let transaction = 0;
        let x = i + 1;
        let cur = prices[i];

        while (prices[x] > prices[x - 1] && x < prices.length) {
            transaction = Math.max(transaction, prices[x] - cur);
            ++x;
        }
        max += transaction;
        i = x;
    }

    return max;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
maxProfit = (prices) => {
    let d, i = 0,
	len = prices.length, 
	profit = 0;
	
    for (i = 0; i < len - 1; i++) {
        d = prices[i + 1] - prices[i];
        profit += d > 0 ? d : 0;
    }

    return profit;
};

maxProfit = (prices) => {
    let maxProfit = 0;
        
    let i = 0;
    while(i < prices.length - 1) {
        if(prices[i + 1] > prices[i]) {
            maxProfit += (prices[i + 1] - prices[i]);
        }
        i++;
    }
    return maxProfit;

}


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitOneTransaction = function(prices) {
    let transaction = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; ++i) {
        if (min > prices[i]) {
            min = prices[i];
        } else {
            transaction = Math.max(transaction, prices[i] - min);
        }
    }
    
    return transaction;
};


let test = [7, 1, 5, 3, 6, 4];
// test = [7,6,4,3,1];
test = [1,2,3,4,5];

console.log(maxProfit(test));

console.log(maxProfitOneTransaction(test));