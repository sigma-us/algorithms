let swap = (arr, fi, si, d) => {
    let i = 0, temp;
    for (i; i < d; i++) {
        temp = arr[fi + i];
        arr[fi + i] = arr[si + i];
        arr[si + i] = temp;
    }
}

let blockSwap = (arr, d, n) => {
    let i, j;

    if (d === 0 || d === n) return;

    i = d;
    j = n - d;

    while (i !== j) {
        if (i < j) /*A is shorter*/ {
            swap(arr, d - i, d + j - i, i);
            j -= i;
        }
        else /*B is shorter*/ {
            swap(arr, d - i, d, j);
            i -= j;
        }

    }

    /*Finally, block swap A and B*/
    swap(arr, d - i, d, i);
    console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

blockSwap(arr, 2, 7);
