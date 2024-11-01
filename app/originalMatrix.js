function Matrix(rows, columns) {
  if ((typeof rows !== "number")
    || (typeof columns !== "number")
    || (rows < 0)
    || (columns < 0)
    || (typeof rows === "undefined")
    || (typeof columns === "undefined")) {
    return "Wrong Data"
  }
  let matrix = ""
  let i = 1;
  while (i < rows) {
    let j = 1;
    while (j < columns) {
      matrix += "a ";
      j++
    }
    i++
    matrix += '\n';
  }
  return matrix;
}
console.log(Matrix(9, 9));

const checkStatus = Matrix

module.exports = { checkStatus } 
