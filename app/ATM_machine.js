function giveBanknotes(amount) {
    let counter = 5
    if ((amount % counter > 0) || amount < 0) {
        return "Error: Amount is not a multiple of 5.";
      }
const nominalValues = [100, 50, 20, 10, 5]
const banknotes = {}
 for (const nominalValue of nominalValues){
    banknotes[nominalValue] = Math.floor(amount / nominalValue);
    amount %= nominalValue;
  }
  if (amount > 0) {
    return "Error: Cannot give the specified amount.";
  } else {
    return banknotes;
  }
}
console.log(giveBanknotes(465))

const testsATMmachine = giveBanknotes

module.exports = { testsATMmachine }
