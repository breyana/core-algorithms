export default function setIntersection(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    throw new Error('Input is not an array')
  }

  if (!array2) {
    throw new Error('Requires two array inputs')
  }

  let intersection = []
  array2.map((element) => {
    if (array1.indexOf(element) > -1) {
      intersection.push(element)
    }
  })

  return intersection
}
