// Find two entries in array of ints that sum to given X value

function findInts(arr, sum) {
  let toFind = 0

  for (i = 0; i < arr.length; i++) {
    toFind = sum - arr[i]
    
    for (j = i; j < arr.length; j++) {
      if (arr[j] === toFind) {
        return `${arr[i]},${arr[j]} => ${sum}`
      }
    }
  }
  
  return `Cannot find two items that sum to ${sum}`

}

function findIntsOptimal(arr, sum) {
  let hash = {}

  for (i = 0; i < arr.length; i++) {
    hash[arr[i]] = i
  }

  for (i = 0; i < arr.length; i++) {
    if (hash[sum - arr[i]] && hash[sum - arr[i]] !== i) {
      return `${arr[i]},${arr[hash[sum - arr[i]]]} => ${sum}`
    }
  }
  
  return `Cannot find two items that sum to ${sum}`

}

// console.log(findInts([1,2,4,5,6], 10))
// console.log(findInts([1,2,4,5,6], 11))
// console.log(findInts([1,2,4,5,6], 6))
// console.log(findInts([1,2,4,5,6], 13))
// console.log(findInts([10,2,4,5,6], 7))
// console.log(findInts([10,2,4,5,-3], 7))

console.log(findIntsOptimal([1,2,4,5,6], 10))
console.log(findIntsOptimal([1,2,4,5,6], 11))
console.log(findIntsOptimal([1,2,4,5,6], 6))
console.log(findIntsOptimal([1,2,4,5,6], 13))
console.log(findIntsOptimal([10,2,4,5,6], 7))
console.log(findIntsOptimal([10,2,4,5,-3], 7))