const { checkStatus } = require("../app/originalMatrix")
const constructionElement = "a"
describe.only.each([
    [1, 1],
    [99, 99],
    [12, 17],
    [3, 3],
])("Actual result muct coincide with expected in matrix %ix%i", (expectedRows, expectedColumns) => {
    let matrix = checkStatus(expectedRows, expectedColumns)
    test(`Expected amount of rows ${expectedRows} must coincide with obtained`, () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(expectedRows)
    })
    test(`Expected amount of columns ${expectedColumns} must coincide with obtained`, () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length
            expect(numColumns).toBe(expectedColumns)
        })
    })
    test('Char', () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '');
            let char = numColumns.some(chars => chars !== constructionElement)
            expect(char).toBeFalsy()
        })
    })
})

