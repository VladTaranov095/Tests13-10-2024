const { checkStatus } = require("../app/originalMatrix")

describe('test_of_matrix', () => {
    test('tests incoming values', () => {

        expect(checkStatus(0,0)).toBe("")
        expect(checkStatus()).toBe("Wrong Data")
        expect(checkStatus(1,1)).toContain('a ')

        expect(checkStatus()).not.toBeUndefined()

        
    })


})