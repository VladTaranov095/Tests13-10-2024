const { checkStatus } = require("../app/originalMatrix")

describe('test 1x1', () => {
    let matrix
    matrix = checkStatus(1, 1)
    test('Test rows', () => {
        let rows = matrix.split("\n")
        let numRows = rows.length
        expect(numRows).toBe(2)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ").length
        expect(numColumns).toBe(2)
    })
    test('Char', () => {

    })
})
describe('test 99x99', () => {
    let matrix
    matrix = checkStatus(99, 99)
    test('Test rows', () => {
        let rows = matrix.split("\n")
        let numRows = rows.length
        expect(numRows).toBe(100)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ").length
        expect(numColumns).toBe(100)
    })
    test('Char', () => {
    })
})
describe('test 12x17', () => {
    let matrix
    matrix = checkStatus(12, 17)
    test('Test rows', () => {
        let rows = matrix.split("\n")
        let numRows = rows.length
        expect(numRows).toBe(13)
    })
    test('Test columns', () => {
        let rows = matrix.split("\n")
        let numColumns = rows[0].split(" ").length
        expect(numColumns).toBe(18)
    })
    test('Char', () => {
    })
})
describe('test char of matrix', () => {
    test('Char "a"', () => {
        let matrix
        matrix = checkStatus(10, 10)
        let char = "a "
        expect(matrix).toContain("a ")
    })
})

