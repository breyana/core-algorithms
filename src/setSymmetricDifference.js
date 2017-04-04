export default function setSymmetricDifference(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    throw new Error('Input is not an array')
  }

  if (!array2) {
    throw new Error('Requires two array inputs')
  }

  let symmetricDifference = []

  array1.map((element) => {
    if (array2.indexOf(element) === -1) {
      symmetricDifference.push(element)
    }
  })

  array2.map((element) => {
    if (array1.indexOf(element) === -1) {
      symmetricDifference.push(element)
    }
  })

  return symmetricDifference
}
