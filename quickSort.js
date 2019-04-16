// helper function to swap two elements
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// this helper function pivots the array around
// its first element; mutates the input
function pivotFunc(arr, start = 0, end = arr.length - 1) {
  // pick a pivot at the start
  // initialize a pivot index var
  let pivot = arr[start];
  let pivotIndex = start;

  // loop from the start plus one to the end
  // (skip the first element which is our pivot)
  // if current element is less than pivot
  // increment the count
  // swap this element with the one at the pivot index
  for (let i = start + 1; i <= end; i += 1) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  // swap the pivot (the start)
  // with the pivot index
  // and return the pivot index
  swap(arr, pivotIndex, start);
  return pivotIndex;
}

// the quicksort algo itself
function quickSort(arr, left = 0, right = arr.length - 1) {
  // if current array is just one element, push it up the stack
  if (left < right) {
    // if it's longer than one element
    // call pivot on each side of the pivot
    let pivotIndex = pivotFunc(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  // all done
  return arr;
}

let arr = [4, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 8, 6, 9, 4, 2, 1, 3, 5, 7];
console.log(quickSort(arr));
console.log(arr);
