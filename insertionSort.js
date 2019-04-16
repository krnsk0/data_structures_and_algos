// the insertion sort algo
function insertionSort(arr) {
  // outer loop picks a starting point
  // the sub-array prior to this starting point
  // will always be sorted
  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];

    // this inner loop works backwards from the
    // index set by the outer loop
    // it breaks at zero but also breaks
    // when the selected outer loop value (current)
    // is no longer bigger than the inner loop value
    let j;
    for (j = i - 1; j >= 0 && current < arr[j]; j -= 1) {
      // this shifts everything to the right
      // until we hit our target point
      arr[j + 1] = arr[j];
    }

    // this inserts our outer loop's value at the selected point
    arr[j + 1] = current;
  }

  // all done
  return arr;
}

console.log(
  insertionSort([0, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 8, 6, 9, 4, 2, 1, 3, 5, 7])
);
