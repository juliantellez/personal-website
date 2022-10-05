import IBlogPost from '../../Interfaces/IBlogPost'

import IEventPayload from './Interfaces/IEventPayload'
import calculateReadingTime from './Utils/calculateReadingTime'
import createHumanReadableDate from './Utils/createHumanReadableDate'
import extractFrontMatter from './Utils/extractFrontMatter'
import parseMarkdown from './Utils/parseMarkdown'

const parseEvent = (event: IEventPayload): IBlogPost => {
    const { rawContent, frontMatter } = extractFrontMatter(event.data)
    const content = parseMarkdown(rawContent)
    const description = parseMarkdown(frontMatter.description)

    const date = new Date()

    return {
        ...frontMatter,

        description,
        body: content,
        readingTime: calculateReadingTime(rawContent),

        slug: event.slug || '',
        uuid: event.uuid || '',
        updated: createHumanReadableDate(date),
        created: createHumanReadableDate(
            event.created ? new Date(event.created) : date
        ),
    }
}

export { parseEvent }
