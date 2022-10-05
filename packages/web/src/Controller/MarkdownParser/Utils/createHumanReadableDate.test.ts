import createHumanReadableDate from './createHumanReadableDate'

describe('createHumanReadableDate', () => {
    it('should parse unix into a readable date', () => {
        const actual = createHumanReadableDate(new Date(1538523952846))
        const expected = '3 Oct 2018'

        expect(actual).toBe(expected)
    })
})
