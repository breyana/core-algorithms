export default function makeChange({price, amountGiven}) {
  const denom = [
    ["quarters", 25],
    ["dimes", 10],
    ["nickels", 5],
    ["pennies", 1]
    ]

  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  let difference = amountGiven - price

  denom.map((element, index) => {
    if (difference > 0) {
      while (difference >= denom[index][1]) {
        difference -= denom[index][1]
        change[denom[index][0]]++
      }
    }
  })

  return change
}
