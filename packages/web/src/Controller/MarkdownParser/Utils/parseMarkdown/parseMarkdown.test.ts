import * as fs from 'fs'
import * as path from 'path'

import parseMarkdown from './parseMarkdown'

describe('parseMarkdown', () => {
    it('should parse markdown strings', () => {
        const actual = '# Foo Baz'

        const expected = '<h1>Foo Baz</h1>\n'
        const value = parseMarkdown(actual)
        expect(value).toBe(expected)
    })

    it('should parse code blocks to hml strings', () => {
        const filePath = path.resolve(__dirname, './codeBlock.md')
        const actual = fs.readFileSync(filePath, { encoding: 'utf-8' })

        const expected =
            '<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> foo <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./foo&#x27;</span>\n' +
            '<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> foo\n' +
            '</code></pre>\n'

        const value = parseMarkdown(actual)

        expect(value).toBe(expected)
    })

    it('should handle no inputs', () => {
        const actual = void 0 as any
        const expected = ''
        const value = parseMarkdown(actual)
        expect(value).toBe(expected)
    })
})
