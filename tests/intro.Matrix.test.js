const { checkStatus } = require("../app/originalMatrix")

describe('test 1x1', () => {
    let matrix
    matrix = checkStatus(1, 1)
    test('Test rows', () => {
        let rows = matrix.split("\n", 1)
        let numRows = rows.length
        expect(numRows).toBe(1)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ", 1).length
        expect(numColumns).toBe(1)
    })
    test('Char', () => {

    })
})
describe('test 99x99', () => {
    let matrix
    matrix = checkStatus(99, 99)
    test('Test rows', () => {
        let rows = matrix.split("\n", 99)
        let numRows = rows.length
        expect(numRows).toBe(99)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ", 99).length
        expect(numColumns).toBe(99)
    })
    test('Char', () => {
    })
})
describe('test 12x17', () => {
    let matrix
    matrix = checkStatus(12, 17)
    test('Test rows', () => {
        let rows = matrix.split("\n", 12)
        let numRows = rows.length
        expect(numRows).toBe(12)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ", 17).length
        expect(numColumns).toBe(17)
    })
    test('Char', () => {
    })
})
describe('test char of matrix', () => {
    test('Char "a"', () => {
        let matrix
        matrix = checkStatus(3, 3)
        let ab = matrix.split("\n")
        let char = ab[0].split(" ", 3)
        expect(char).toContain("a")
    })
})
describe('test 3x3', () => {
    let matrix
    matrix = checkStatus(3, 3)
    test('Test rows', () => {
        let rows = matrix.split("\n", 3)
        let numRows = rows.length
        expect(numRows).toBe(3)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ", 3).length
        expect(numColumns).toBe(3)
    })
})

