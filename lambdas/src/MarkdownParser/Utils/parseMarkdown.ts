import * as MarkdownIt from 'markdown-it';
import * as prism from 'markdown-it-prism';

const parseMarkdown = (markdown: string) => {
    const md = new MarkdownIt();
    md.use(prism, {
        defaultLanguage: 'javascript'
    });

    return md.render(markdown)
}

export default parseMarkdown;
