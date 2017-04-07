export default function isPalindrome(input) {
  let strippedInput = input.replace(/[^\w]+/g, '').toLowerCase()
  let reversedInput = strippedInput.split('').reverse().join('')
  return strippedInput === reversedInput
}
