// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE
    let small = arr[0];
    num = num - 1;
    let res;
    
    for (small; small > 1; --small) {
        for (num; num >= 0; --num) {
            // uncomment commented code for recursive solution
            // see notes below for my reasons to avoid using recursion
            //res = rec(arr[num], small);
            //if (res === 1) return res;
            if (arr[num]%small !== 0) break;
            else if (num === 0) return small;
        }
    }
    
    return res;
}
// recursive function as an alternative to double for loop
// due to excess time, might as well try it out
// got it to work, due to not knowing the maximum array size 
// i will be using the double for loop to avoid any potential
// stack overflows
//function rec(a, b) {
//    if (a === 0) return b;
//    return rec(b%a, a)
//}
// FUNCTION SIGNATURE ENDS