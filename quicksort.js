function partition(arr, startIndex, endIndex) {
  const pivotVal = arr[endIndex]; // the pivot element
  let index = startIndex;
  // begin iterate and swap
  for (let i = index; i < endIndex; i++) {
    if (arr[i] < pivotVal) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index += 1;
    }
  }

  // move `pivotVal` to the middle index and return middle index
  [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
  return index;
}

function quickSort(arr, startIndex, endIndex) {
  // Base case or terminating case
  if (startIndex >= endIndex) {
    return;
  }

  // Returns midIndex / pivot index
  let midIndex = partition(arr, startIndex, endIndex);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, startIndex, midIndex - 1);
  quickSort(arr, midIndex + 1, endIndex);
}

// let arr = [4, 3, 2, 1];
let arr = [4, 5, 2, 1, 10, 99, 6]
quickSort(arr, 0, arr.length - 1);
console.log(arr); 