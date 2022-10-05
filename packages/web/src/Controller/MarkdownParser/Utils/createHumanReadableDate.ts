const LOCALE_ENGLISH = 'en-GB'

const createHumanReadableDate = (
    date: Date = new Date(),
    locale = LOCALE_ENGLISH
): string => {
    return new Date(date).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

export default createHumanReadableDate
