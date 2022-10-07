import * as MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
// import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/a11y-dark.css'

/**
 * see https://github.com/markdown-it/markdown-it#syntax-highlighting
 */
const parseMarkdown = (markdown: string): string => {
    if (typeof markdown !== 'string') {
        return ''
    }

    const md = new MarkdownIt({
        highlight: (str, lang) => {
            try {
                return (
                    `<pre><code class="language-${lang} hljs">` +
                    hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true,
                    }).value +
                    '</code></pre>'
                )
            } catch (error) {
                return (
                    `<pre><code class="language-${lang} hljs">` +
                    md.utils.escapeHtml(str) +
                    '</code></pre>'
                )
            }
        },
    })

    return md.render(markdown)
}

export default parseMarkdown
