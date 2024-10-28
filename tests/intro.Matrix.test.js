const { checkStatus } = require("../app/originalMatrix")

describe('test_of_matrix', () => {
    let matrix
    matrix = checkStatus(6, 3)

    describe('Test lenght and char of Matrix', () => {
        test('Test rows', () => {
            let numRows = matrix.split("\n")
            let rows = numRows.length
            expect(rows).toBe(7)
        })
        test('Test columns', () => {
            let numRows = matrix.split("\n")
            let rows = numRows.length
            let columns = numRows[0].split(" ").length
            expect(columns).toBe(4)
        })
        test('Char', () => {

        })
    })
    describe('', () => {




        
    })





})