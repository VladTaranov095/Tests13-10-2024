const { checkStatus } = require("../app/originalMatrix")
const constructionElement = "a"


describe.only.each([
    {matrix: checkStatus(1,1), expectedRows: 1, expectedColumns: 1, expectedChar: "a"},
    {matrix: checkStatus(99,99), expectedRows: 99, expectedColumns: 99, expectedChar: "a"},
    {matrix: checkStatus(12,17), expectedRows: 12, expectedColumns: 17, expectedChar: "a"},
    {matrix: checkStatus(3,3), expectedRows: 3, expectedColumns: 3, expectedChar: "a"}
])('Test matrix: 1x1, 99x99, 12x17, 3x3', ({matrix, expectedRows, expectedColumns, expectedChar}) => {
    test(`A test for matching the number of rows received to the expected ${expectedRows}.`, () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(expectedRows)
    })
    test(`A test for matching the number of columns received to the expected ${expectedColumns}.`, () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length
            expect(numColumns).toBe(expectedColumns)
        })
        })
        test('Char "a"', () => {
            let rows = matrix.split("\n").filter(element => element !== '');
                    rows.forEach(row => {
                        splitColumns = row.split(" ");
                        numColumns = splitColumns.filter(element => element !== '');
                        let char = numColumns.some(chars => chars !== constructionElement)
                        expect(char).toBeFalsy()
                    })
})
})

describe('test 1x1', () => {
    let matrix
    matrix = checkStatus(1, 1)
    let rows = matrix.split("\n").filter(element => element !== '');
    let expected = 1
    test('Test rows', () => {
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(expected, `Test rows failed: expected ${expected}, received ${numRows}`)
    })
    test('Test columns', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(expected, `Test columns failed: expected ${expected}, received ${numColumns}`)
        })
    })
    test('Char "a"', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '');
            let char = numColumns.some(chars => chars !== constructionElement)
            expect(char).toBeFalsy()
        })
    })
})
describe('test 99x99', () => {
    let matrix
    matrix = checkStatus(99, 99)
    let rows = matrix.split("\n").filter(element => element !== '');
    let  expected = 99
    test('Test rows', () => {
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(expected, `Test rows failed: expected ${expected}, received ${numRows}`)
    })
    test('Test columns', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(expected, `Test columns failed: expected ${expected}, received ${numColumns}`)
        })
    })
    test('Char "a"', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '');
            let char = numColumns.some(chars => chars !== constructionElement)
            expect(char).toBeFalsy()
        })
    })
})
describe('test 12x17', () => {
    let matrix
    matrix = checkStatus(12, 17)
    let rows = matrix.split("\n").filter(element => element !== '');
    test('Test rows', () => {
        let numRows = rows.filter(element => element !== "").length
        expected = 12
        expect(numRows).toBe(expected, `Test rows failed: expected ${expected}, received ${numRows}`)
    })
    test('Test columns', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expected = 17
            expect(numColumns).toBe(expected, `Test columns failed: expected ${expected}, received ${numColumns}`)
        })
    })
    test('Char "a"', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '');
            let char = numColumns.some(chars => chars !== constructionElement)
            expect(char).toBeFalsy()
        })
    })
})
describe('test 3x3', () => {
    let matrix
    matrix = checkStatus(3, 3)
    let rows = matrix.split("\n").filter(element => element !== '');
    let expected = 3
    test('Test rows', () => {
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(expected, `Test rows failed: expected ${expected}, received ${numRows}`)
    })
    test('Test columns', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(expected, `Test columns failed: expected ${expected}, received ${numColumns}`)
        })
    })
    test('Char "a"', () => {
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '');
            let char = numColumns.some(chars => chars !== constructionElement)
            expect(char).toBeFalsy()
        })
    })
})


