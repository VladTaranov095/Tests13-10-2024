const { checkStatus } = require("../app/originalMatrix")

describe('test_of_matrix', () => {
    let Matrix
    Matrix = checkStatus(6, 3)

    describe('Matrix functional test', () => {

        test('tests incoming values', () => {
            expect(Matrix).toContain('a ')
            expect(Matrix).toHaveLength(42)


        })

    })
    describe('test not valid values of Matrix', () => {

        test('test values of Matrix', () => {

            expect(Matrix).toBeDefined()
            expect(Matrix).toBeTruthy()
            expect(Matrix)
            expect(Matrix)


        })


    })





})