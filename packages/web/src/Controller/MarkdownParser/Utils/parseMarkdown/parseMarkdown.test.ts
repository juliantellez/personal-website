import * as fs from 'fs'
import * as path from 'path'

import parseMarkdown from './parseMarkdown'

describe('parseMarkdown', () => {
    it('should parse markdown strings', () => {
        const actual = '# Foo Baz'

        const expected = '<h1>Foo Baz</h1>\n'

        expect(parseMarkdown(actual)).toBe(expected)
    })

    it('should parse code blocks to hml strings', () => {
        const filePath = path.resolve(__dirname, './codeBlock.md')
        const actual = fs.readFileSync(filePath, { encoding: 'utf-8' })

        const expected = `<pre><code class="language-javascript">import foo from './foo'\nexport default foo\n</code></pre>\n`

        expect(parseMarkdown(actual)).toBe(expected)
    })

    it('should handle no inputs', () => {
        const actual = void 0 as any
        const expected = ''

        expect(parseMarkdown(actual)).toBe(expected)
    })
})
