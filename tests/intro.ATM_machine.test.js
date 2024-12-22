const { testsATMmachine } = require('../app/ATM_machine.js')
describe('Critical values', () => {
    test(' Not multiple of 5', () => {
      expect(testsATMmachine(12)).toEqual("Error: Amount is not a multiple of 5.")
      expect(testsATMmachine(123)).toEqual("Error: Amount is not a multiple of 5.")
    });
    test('Amount is less than 0', () => {
      expect(testsATMmachine(-1)).toEqual("Error: Cannot give the specified amount.")
      expect(testsATMmachine(-13)).toEqual("Error: Cannot give the specified amount.")
    })
    test('The amount is not an integer', () => {
      expect(testsATMmachine(12.3)).toEqual("Error: The entered number is not an integer.")
    })
})  
describe('Issue banknotes', () => {
  test('Must issue right banknotes for acceptable amounts', () => {
    expect(testsATMmachine(1465)).toEqual({100: 14, 50: 1, 20: 0, 10: 1, 5: 1})
    expect(testsATMmachine(6795)).toEqual({100: 67, 50: 1, 20: 2, 10: 0, 5: 1})
  })
  test('', () => {
    
  })
})