export default function fizzBuzz() {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    array.push(i)
  }

  let fizzBuzzed = array.map((element, index) => {
    let fizzBuzzState = []

    if (element % 3 === 0) {
      fizzBuzzState.push("Fizz")
    }
    if (element % 5 === 0) {
      fizzBuzzState.push("Buzz")
    }

    if (fizzBuzzState.length > 0) {
      return fizzBuzzState.join('')
    }
  })

  return fizzBuzzed
}
