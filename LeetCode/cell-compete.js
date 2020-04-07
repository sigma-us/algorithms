// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    let len = states.length;
    let newState = [];
    
    for (days; days > 0; --days) {
        for (let x = 0; x < len ; ++x) {
            if (x === 0) newState[0] = states[1] ? 1 : 0;
            else if (x < len -1) {
                newState[x] = states[x-1] === states[x+1] ? 0 : 1;
            } else {
                newState[x] = states[x-1] === 0 ? 0 : 1;
            }
        }
        states = newState;
        newState = [];
    }
    
    return states;
}
// FUNCTION SIGNATURE ENDS