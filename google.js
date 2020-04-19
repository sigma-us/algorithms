// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
let arr = [];
let tests = -1;
let n = 1;
let m = 0;
let test = [];


const peaks = (n, array) => {
    if (n < 3) return 0;
    let peaks = 0;

    for (let i = 1; i < n - 1; ++i) {
        if (array[i - 1] < array[i] && array[i] > array[i + 1]) ++peaks;
    }

    return peaks;
}


// process.argv.forEach((val, i, array) => {
//     if (val > 0) {
//         if (tests === -1) {
//             tests = Number(val);
//         } else if (m === 0) {
//             // number of items in array
//             m = val;
//         } else {
//             // add item
//             test.push(Number(val));
//             // check if item made the array complete
//             if (test.length == m) {
//                 let ok = peaks(m, test);
//                 process.stdout.write(`Case #` + n + ': ' + ok + '\n');
//                 m = 0;
//                 n++;
//                 test = [];
//                 tests--;
//             }
//         }
//     }

//     if (tests === 0) {
//         process.exit();
//     }

// })



process.stdin.on('data', (input) => {
    console.log(input)
    input = input.split('\n');

    if (tests === -1) {
        tests = Number(input[0]);
    } else if (arr && arr.length === 0) {
        arr.push(input[0])
    } else {
        arr.push(input[0].split(' '))
        let ok = peaks(arr[0], arr[1]);
        process.stdout.write(`Case #${n}: ${ok}`);
        n++;
        arr = [];
        tests--;
    }

    if (tests === 0) {
        process.exit();
    }
})

