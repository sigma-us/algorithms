// shortest on codesignal
function isCryptSolution(crypt, solution) {
    const [a, b, c] = crypt;
    const map = {};
    solution.forEach((item) => map[item[0]] = +item[1])

    const convert = (n) => {
        if (!map[n[0]] && n.length > 1) return NaN;
        return +n.split('').map(l => map[l]).join('')
    }
    
    return convert(a) + convert(b) === convert(c);
}


//mine
function isCryptSolution(crypt, solution) {
    let sol = solution.length;
    let i = 0;
    let solu = [];
    
    for (i; i < 3; i++) {
        let code = [];
        let len = crypt[i].length;
        let x = 0;

        for (x; x < len; x++) {
            let l = crypt[i][x];
            let j = 0;

            for (j; j < sol; j++) {
                if (solution[j][0] === l) {
                    code.push(solution[j][1]);
                    if (code[0] === '0' && len > 1) {
                        return false;
                    }
                }
            }
        }
        solu.push(Number(code.join('')));
    }
    
    return solu[0] + solu[1] === solu[2];
}


let crypt =
["SEND", 
 "MORE", 
 "MONEY"]
let solution =
[["O","0"], 
 ["M","1"], 
 ["Y","2"], 
 ["E","5"], 
 ["N","6"], 
 ["D","7"], 
 ["R","8"], 
 ["S","9"]]