import {assert} from 'chai';
import * as fs from 'fs';
import * as path from 'path';

import parseMarkdown from './parseMarkdown';

describe('parseMarkdown', () => {
    it('should parse markdown strings', () => {
        const actual = '# Foo Baz';

        const expected = '<h1>Foo Baz</h1>\n';

        assert.equal(parseMarkdown(actual), expected);
    });

    it('should parse code blocks to hml strings', () => {
        const filePath = path.resolve(__dirname, './codeBlock.md');
        const actual = fs.readFileSync(filePath, {encoding: 'utf-8'});

        const expected =
            '<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> foo\n</code></pre>\n';

        assert.equal(parseMarkdown(actual), expected);
    });

    it('should handle no inputs', () => {
        const actual = void 0 as any;
        const expected = '';

        assert.equal(parseMarkdown(actual), expected);
    });
});
