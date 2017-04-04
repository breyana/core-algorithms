export default function setComplement(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    throw new Error('Input is not an array')
  }

  if (!array2) {
    throw new Error('Requires two array inputs')
  }

  let complements = []

  array2.map((element) => {
    if (array1.indexOf(element) === -1) {
      complements.push(element)
    }
  })

  return complements
}
