const { testsATMmachine } = require('../app/ATM_machine.js')
describe.each([
  [1, "Error: Amount is not a multiple of 5."],
  [16, "Error: Amount is not a multiple of 5."],
  [57, "Error: Amount is not a multiple of 5."],
  [133, "Error: Amount is not a multiple of 5."],
])("ATM machine geting a value which is not divisible by five ", (amount, error) => {
  test(`The amount ${amount} not multiple of 5, ATM maching must return an error:${error}`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})
describe.each([
  [-1, "Error: Cannot give the specified amount."],
  [-16, "Error: Cannot give the specified amount."],
  [-57, "Error: Cannot give the specified amount."],
  [-133, "Error: Cannot give the specified amount."],
])("If amount is less than 0 ", (amount, error) => {
  test(`The ${amount} is less than 0, ATM machine mest return an error:${error}`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})
describe.each([
  [0.5 , "Error: The entered number is not an integer."],
  [1.7, "Error: The entered number is not an integer."],
  [55.7, "Error: The entered number is not an integer."],
  [105.3, "Error: The entered number is not an integer."],
])("If the amount is not an integer", (amount, error) => {
  test(`ATM maching get ${amount} and must return error:${error}`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})
describe.each([
  [1465, {100: 14, 50: 1, 20: 0, 10: 1, 5: 1}],
  [6795, {100: 67, 50: 1, 20: 2, 10: 0, 5: 1}],
])("ATM maching must issue banknotes on increasing denominations, beginning from smallest.", (amount, expectedNominal) => {
  test(`We want to get ${amount} in the following face value: ${expectedNominal}`, () => {
    expect(testsATMmachine(amount)).toEqual(expectedNominal)
  })
})