const WORDS_PER_MINUTE = 200

const pluralise = (word: string, quantifier: number): string => {
    const plural = quantifier > 1 ? 's' : ''

    return `${word}${plural}`
}

const calculateReadingTime = (
    text: string,
    wordsPerMinute: number = WORDS_PER_MINUTE
): string => {
    const words = text.split(' ')

    const estimatedTime = Math.ceil(words.length / wordsPerMinute)

    return `${estimatedTime} ${pluralise('minute', estimatedTime)}`
}

export default calculateReadingTime
