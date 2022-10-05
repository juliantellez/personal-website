import * as fs from 'fs'
import * as path from 'path'

import { parseEvent } from './handler'
import IEventPayload from './Interfaces/IEventPayload'

const markdownPath = path.resolve(__dirname, '../../../../resume/index.md')
const markdown = fs.readFileSync(markdownPath, { encoding: 'utf-8' })

describe('MarkdownParser', () => {
    it.skip('should parse md to html', () => {
        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug',
        }

        const actual = parseEvent(event)
        ;[
            'title',
            'subTitle',
            'description',
            'tags',
            'published',
            'coverImage',
            'body',
            'readingTime',
            'slug',
            'uuid',
            'updated',
            'created',
        ].forEach((key) => {
            expect(actual[key]).not.toBeNull()
        })
    })

    it('should persist uuid', () => {
        const expected = 'uui'

        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug',
            uuid: expected,
        }

        const actual = parseEvent(event)
        expect(actual).toBe(expected)
    })

    it('should persist created date', () => {
        const expected = 'Oct 8, 2019'

        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug',
            created: expected,
        }

        const actual = parseEvent(event)
        expect(actual).toBe(expected)
    })
})
