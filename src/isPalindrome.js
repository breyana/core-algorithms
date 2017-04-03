export default function isPalindrome(input) {
  let strippedInput = input.replace(/[^A-Za-z]+/g, '').toLowerCase()
  let reversedInput = strippedInput.split('').reverse().join('')
  return strippedInput === reversedInput
}
