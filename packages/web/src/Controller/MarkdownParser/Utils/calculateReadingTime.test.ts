import calculateReadingTime from './calculateReadingTime'

describe('calculateReadingTime', () => {
    it('should calculate 1 min reading time', () => {
        const text = new Array(100).map(() => 'foo').join(' ')
        const actual = calculateReadingTime(text)
        const expected = '1 minute'

        expect(actual).toBe(expected)
    })

    it('should calculate plural reading time', () => {
        const text = new Array(250).map(() => 'foo').join(' ')
        const actual = calculateReadingTime(text)
        const expected = '2 minutes'

        expect(actual).toBe(expected)
    })
})
