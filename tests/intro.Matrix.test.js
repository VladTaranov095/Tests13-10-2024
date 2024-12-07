const { checkStatus } = require("../app/originalMatrix")
const constructionElement = "a"

describe('test 1x1', () => {
    let matrix
    matrix = checkStatus(1, 1)
    test('Test rows', () => {
        let splitRows = matrix.split("\n")
        let rows = splitRows
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(1)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(1)
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
describe('test 99x99', () => {
    let matrix
    matrix = checkStatus(99, 99)
    test('Test rows', () => {
        let splitRows = matrix.split("\n")
        let rows = splitRows
        let numRows = rows.filter(element => element !== "").length
        expect(numRows).toBe(99)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(99)
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
describe('test 12x17', () => {
    let matrix
    matrix = checkStatus(12, 17)
    test('Test rows', () => {
        let splitRows = matrix.split("\n")
        let rows = splitRows
        let numRows = rows.filter(element => element !== '').length

        expect(numRows).toBe(12)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(17)
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
describe('test 3x3', () => {
    let matrix
    matrix = checkStatus(3, 3)
    test('Test rows', () => {
        let splitRows = matrix.split("\n")
        let rows = splitRows
        let numRows = rows.filter(element => element !== "").length

        expect(numRows).toBe(3)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n").filter(element => element !== '');
        rows.forEach(row => {
            splitColumns = row.split(" ");
            numColumns = splitColumns.filter(element => element !== '').length;
            expect(numColumns).toBe(3)
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


