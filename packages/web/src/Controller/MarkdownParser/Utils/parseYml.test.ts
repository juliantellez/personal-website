import parseYml from './parseYml'

describe('parseYml', () => {
    it('should parse yml', () => {
        const input = `
        title: foo baz
        subTitle: gizmo
        description: >
            "
            ### Mock Title;
            > Mock content.
            "
        tags:
            - foo
            - baz
        published: true
        coverImage: 'https://...'
        `

        const expected = {
            title: 'foo baz',
            subTitle: 'gizmo',
            description: '" ### Mock Title; > Mock content. "\n',
            tags: ['foo', 'baz'],
            published: true,
            coverImage: 'https://...',
        }

        expect(parseYml(input)).toStrictEqual(expected)
    })

    it('should handle no inputs', () => {
        const input = void 0 as any
        const expected = {
            coverImage: '',
            title: '',
            tags: [],
            subTitle: '',
            published: false,
            language: '',
            description: '',
        }

        expect(parseYml(input)).toStrictEqual(expected)
    })
})
