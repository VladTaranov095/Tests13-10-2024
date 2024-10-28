const { checkStatus } = require("../app/originalMatrix")

describe('test 1x1', () => {
    let matrix
    matrix = checkStatus(1, 1)
    test('Test rows', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        expect(rows).toBe(2)
    })
    test('Test columns', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        let columns = numRows[0].split(" ").length
        expect(columns).toBe(2)
    })
    test('Char', () => {

    })
})


describe('test 99x99', () => {
    let matrix
    matrix = checkStatus(99, 99)
    test('Test rows', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        expect(rows).toBe(100)
    })
    test('Test columns', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        let columns = numRows[0].split(" ").length
        expect(columns).toBe(100)
    })
    test('Char', () => {

    })
})



describe('test 12x17', () => {
    let matrix
    matrix = checkStatus(12, 17)
    test('Test rows', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        expect(rows).toBe(13)
    })
    test('Test columns', () => {
        let numRows = matrix.split("\n")
        let rows = numRows.length
        let columns = numRows[0].split(" ").length
        expect(columns).toBe(18)
    })
    test('Char', () => {

    })
})


