const { status } = require('../app/original.js')
describe('Test the function', () => {
    test('Must return valid values', () => {

        expect(status()).not.toBeUndefined()
        expect(status()).not.toBeFalsy()
        expect(status()).not.toBeNull()


    })
    test('Test of returned data', () => {

        expect(status(1)).toBe('Pupil')
        expect(status(17)).toBe('Pupil')
        expect(status(18)).toBe('Student')
        expect(status(22)).toBe('Worker')
        expect(status(59)).toBe('Worker')
        expect(status(60)).toBe('Retiree')
        expect(status("sdjhdsh")).toBe('Wrong Data')
        expect(status("@#&*><")).toBe('Wrong Data')
        expect(status(0.1)).toBe('Wrong Data')
        expect(status("1/2")).toBe('Wrong Data')
        expect(status(1e3)).toBe('Wrong Data')
        expect(status(undefined)).toBe('Wrong Data')
        expect(status(null)).toBe('Wrong Data')
        expect(status(33.5)).toBe('Wrong Data')

    })




})
//orange
