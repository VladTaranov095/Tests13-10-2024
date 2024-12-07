const { testsATMmachine } = require('../app/ATM_machine.js')
describe('Банкомат', () => {
    it('должен выдавать правильные банкноты для допустимых сумм', () => {
      expect(testsATMmachine(465)).toEqual({100: 4, 50: 1, 20: 0, 10: 1, 5: 1});
    });
})  