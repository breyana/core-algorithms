export default function factorial(number) {
  if (isNaN(number)) {
    throw new Error('Input is not a number')
  }
  let finalnumber = 1
  for (let i = 1; i <= number; i++) {
    finalnumber *= i
  }
  return finalnumber
}
