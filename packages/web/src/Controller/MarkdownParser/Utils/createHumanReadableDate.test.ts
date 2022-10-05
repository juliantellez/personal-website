import createHumanReadableDate from './createHumanReadableDate'

describe('createHumanReadableDate', () => {
    it('should parse unix into a readable date', () => {
        const actual = createHumanReadableDate(new Date('1970-01-01'))
        const expected = '1 Jan 1970'

        expect(actual).toBe(expected)
    })
})
