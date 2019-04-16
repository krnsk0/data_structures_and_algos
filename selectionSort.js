// helper function to swap two elements
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// the selection sort algo
function selectionSort(arr) {
  // this loop picks the start point for
  // our search for the smallest element
  for (let i = 0; i < arr.length; i += 1) {
    // find and store the position of the
    // smallest element in a subarray
    // to the right of i
    let minIndex = i;
    let j;
    for (j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // if we found a new minimum number
    // swap it with i
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }

  // all done
  return arr;
}

console.log(
  selectionSort([0, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 8, 6, 9, 4, 2, 1, 3, 5, 7])
);
