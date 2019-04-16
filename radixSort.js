// Helper function to return the integer at a certain
// place in a number. 0 returns the ones digit,
// 1 returns the tens digit, etc. Digit values
// greater than the number of digits result
// in the function returning 0.
function getDigit(number, digit) {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10
}

// Helper function to determine number
// of digits in the number
function digitCount(number) {
  if (number === 0) return 1
  return Math.floor(Math.log10(Math.abs(number))) + 1
}

// Apply the digit count function to find the number
// with the largest number of digits in the array
function mostDigits(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i += 1) {
    thisOne = digitCount(arr[i])
    max = Math.max(max, thisOne)
  }
  return max
}

// the radix sort itself
function radixSort(arr) {
  let most = mostDigits(arr)

  // iterate for each digit
  for (let k = 0; k < most; k += 1) {
    let digitBuckets = Array.from({length: 10}, () => [])

    // loop the array and bucketize them
    for (let i = 0; i < arr.length; i += 1) {
      digitBuckets[getDigit(arr[i], k)].push(arr[i])
    }

    // concat the array
    arr = [].concat(...digitBuckets)
  }

  // return sorted array
  return arr
}



arr = [452, 5985, 12, 456, 248958, 1234, 68, 4786, 24]
console.log(radixSort(arr))
