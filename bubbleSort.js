// helper function to swap two elements
function swap(arr, x, y) {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

// the bubble sort algo
function bubbleSort(arr) {
  // start and the end and work backwards
  // this makes sure we pass over the elements
  // which have risen to the top
  for (let i = arr.length; i > 0; i -= 1) {

    // start by assuming we didn't do any swaps
    // this lets us quit early
    // if we've sorted the whole thing
    // which we discover by checking to see
    // if we do any swaps
    let swapTest = false

    // inner loop handles comparisons
    // runs from start to the part that's sorted
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j+1]){
        swap(arr, j, j+1)
        swapTest = true
      }
    }

    // if we didn't swap anything this time
    // then break the loop and return
    if (swapTest == false) break
  }

  // all done
  return arr
}

console.log(bubbleSort([0, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 8, 6, 9, 4, 2, 1, 3, 5, 7]));
