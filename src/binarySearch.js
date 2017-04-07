export default function binarySearch(array, searchedElement) {
  if (!Array.isArray(array)) {
    throw new Error('Input is not an array')
  }
  
  if(!searchedElement) {
    throw new Error('Binary Search requires two parameters: array and number to search for')
  }

  if(typeof searchedElement !== 'number') {
    throw new Error('Element to search for is not a number')
  }


  let minIndex = 0
  let maxIndex = array.length - 1

  while (minIndex <= maxIndex) {
    if (array[minIndex] === searchedElement) {
      return minIndex
    } else if (array[maxIndex] === searchedElement) {
      return maxIndex
    } else {
      minIndex++
      maxIndex--
    }
  }

  throw new Error('Searched Element is not in given array')
}
