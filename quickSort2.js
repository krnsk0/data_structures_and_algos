function quickSort(arr) {
  // if array is just one element, push it up the stack
  if (arr.length <= 1) return arr

  // Pick a pivot, any pivot,
  // and initialize subarrays to sort into
  let pivot = arr[0]
  let left = []
  let right = []

  // sort into the left and right subarrays
  // around the pivot
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] <= pivot) left.push(arr[i])
    else if (arr[i] > pivot) right.push(arr[i])
  }

  // quicksort the subarrays
  left = quickSort(left)
  right = quickSort(right)

  // merge the results and push up the call stack
  result = left.concat(pivot, right)
  return result
}





arr = [4, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 8, 6, 9, 4, 2, 1, 3, 5, 7]
console.log(quickSort(arr));
