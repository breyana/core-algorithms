export default function setUnion(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    throw new Error('Input is not an array')
  }

  if (!array2) {
    throw new Error('Requires two array inputs')
  }

  let union = array1

  array2.map((element) => {
    if (array1.indexOf(element) === -1) {
      union.push(element)
    }
  })

  return union
}
