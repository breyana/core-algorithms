export default function fibonacci(number) {
  if (isNaN(number)) {
    throw new Error('Input is not a number')
  }

  let fibArray = [0,1]

  for(let i = 2; i < number; i++) {
    fibArray[i] = fibArray[i-2] + fibArray[i-1]
  }

  return fibArray
}
