export default function collatzConjecture(number) {
  if (isNaN(number)) {
    throw new Error('Input is not a number')
  }

  let collatzArray = [number]

  let i = number

  while(i > 1) {
    if(i % 2 === 0) {
      i = i / 2
      collatzArray.push(i)
    } else {
      i = 3 * i + 1
      collatzArray.push(i)
    }
  }

  return collatzArray
}
