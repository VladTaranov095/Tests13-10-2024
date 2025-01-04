const { testsATMmachine } = require('../app/ATM_machine.js')
// describe('Critical values', () => {
//     test(' Not multiple of 5', () => {
//       expect(testsATMmachine(12)).toEqual("Error: Amount is not a multiple of 5.")
//       expect(testsATMmachine(123)).toEqual("Error: Amount is not a multiple of 5.")
//     });
//     test('Amount is less than 0', () => {
//       expect(testsATMmachine(-1)).toEqual("Error: Cannot give the specified amount.")
//       expect(testsATMmachine(-13)).toEqual("Error: Cannot give the specified amount.")
//     })
//     test('The amount is not an integer', () => {
//       expect(testsATMmachine(12.3)).toEqual("Error: The entered number is not an integer.")
//     })
// })  
// describe('Issue banknotes', () => {
//   test('Must issue 1465', () => {
//     expect(testsATMmachine(1465)).toEqual({100: 14, 50: 1, 20: 0, 10: 1, 5: 1})
//   })
//   test('Must issue 6795', () => {
//     expect(testsATMmachine(6795)).toEqual({100: 67, 50: 1, 20: 2, 10: 0, 5: 1})
//   })
// })
// //Если наша программа будет не только для банкомата, но и для сайта, то могут понадобиться след. тесты:
// describe('Wrong values', () => {
//   test('If entered values not number', () => {
//     expect(testsATMmachine("as")).toEqual("You must enter number if you want to receive the money.")
//   })
// })
describe.each([
  [1, "Error: Amount is not a multiple of 5."],
  [16, "Error: Amount is not a multiple of 5."],
  [57, "Error: Amount is not a multiple of 5."],
  [133, "Error: Amount is not a multiple of 5."],
])("ATM machine geting a value which is not divisible by five ", (amount, error) => {
  test(`The amount ${amount} not multiple of 5, ATM maching must return an error:%s`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})
describe.each([
  [-1, "Error: Cannot give the specified amount."],
  [-16, "Error: Cannot give the specified amount."],
  [-57, "Error: Cannot give the specified amount."],
  [-133, "Error: Cannot give the specified amount."],
])("If amount is less than 0 ", (amount, error) => {
  test(`The %i is less than 0, ATM machine mest return an error:%s`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})
describe.each([
  [0.5 , "Error: The entered number is not an integer."],
  [1.7, "Error: The entered number is not an integer."],
  [55.7, "Error: The entered number is not an integer."],
  [105.3, "Error: The entered number is not an integer."],
])("If the amount is not an integer", (amount, error) => {
  test(`ATM maching get %i and must return error:%s`, () => {
    expect(testsATMmachine(amount)).toEqual(error)
  })
})