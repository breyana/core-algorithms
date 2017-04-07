export default function mergeSort(list) {
  if (!Array.isArray(list)) {
    throw new Error('Input is not an array')
  }

  if (list.length < 2) {
    return list
  }

  const middle = Math.floor(list.length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle, list.length)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  const merged = [];

  while(left.length && right.length) {
    if( left[0] <= right[0]) {
      merged.push( left.shift() )
    } else {
      merged.push( right.shift() )
    }
  }

  while(left.length) {
    merged.push( left.shift() )
  }

  while (right.length) {
    merged.push( right.shift ())
  }

  return merged
}
