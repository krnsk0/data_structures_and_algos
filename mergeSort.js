'use strict'

// helper function for merging arrays
// input arrays must be sorted
function merge(arr1, arr2) {
  let i = 0
  let j = 0
  let output = []

  // loop each array w pointers
  // push elements to the output array
  // based on which is smallest
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      output.push(arr1[i])
      i++
    }
    else if (arr1[i] > arr2[j]) {
      output.push(arr2[j])
      j++
    }
  }

  // once we hit end of an array
  // push the rest of the other one to results
  while (i < arr1.length) {
    output.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    output.push(arr2[j])
    j++
  }

  // output the merged arrays
  return output
}

// the main merge sort function
function mergeSort(arr) {
  // if length is 1 or 0 return it
  if (arr.length <= 1) return arr;

  // split the input array in two
  let middle = Math.floor(arr.length / 2)
  let arr1 = arr.slice(0, middle)
  let arr2 = arr.slice(middle)

  // merge sort each side
  arr1 = mergeSort(arr1)
  arr2 = mergeSort(arr2)

  // return the merged sorted arrays
  return merge(arr1, arr2)
}


console.log(mergeSort([5, 6, 1, 3, 9, 6, 3, 2, 5, 7, 8, 1, 5, 6, 4, 7, 9, 6, 4, 7, 4, 2]));
