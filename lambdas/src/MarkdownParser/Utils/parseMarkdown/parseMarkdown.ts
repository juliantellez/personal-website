import * as MarkdownIt from 'markdown-it';
import * as prism from 'markdown-it-prism';

const parseMarkdown = (markdown: string): string => {
    if (typeof markdown !== 'string') {
        return '';
    }

    const md = new MarkdownIt();
    md.use(prism, {
        defaultLanguage: 'javascript'
    });

    return md.render(markdown);
};

export default parseMarkdown;
