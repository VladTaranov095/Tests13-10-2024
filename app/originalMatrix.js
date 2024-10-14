function Matrix(rows, columns) {
    if ((typeof rows !== "number")
      || (typeof columns !== "number")
      || (rows < 0)
      || (columns < 0)
      || (typeof rows === "undefined")
      || (typeof columns === "undefined")) {
      return "Wrong Data"
    }
    let matrix = '';
    let i = 0;
    let j = 0;
    while (i < rows) {
      i++
      while (j < columns) {
        j++
        matrix += 'a ';
      }
      j = 0
      matrix += '\n';
  
    }
    return matrix;
  }
  console.log(Matrix(6, 3));

  const checkStatus = Matrix

  module.exports = {checkStatus} 
