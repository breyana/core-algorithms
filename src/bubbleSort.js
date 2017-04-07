export default function bubbleSort(input) {
  if (!Array.isArray(input)) {
    throw new Error('Input is not an array')
  }

  let swapped = true

  while(swapped) {
    swapped = false
    for (let i = 1; i < input.length; i++) {
      if (input[i] < input[i-1]) {
        let temp = input[i-1]
        input[i-1] = input[i]
        input[i] = temp
        swapped = true
      }
    }
  }

  return input
}
