import {assert} from 'chai';

import parseYml from './parseYml';

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
        `;

        const expected = {
            title: 'foo baz',
            subTitle: 'gizmo',
            description: '" ### Mock Title; > Mock content. "\n',
            tags: ['foo', 'baz'],
            published: true,
            coverImage: 'https://...'
        };

        assert.deepEqual(parseYml(input), expected);
    });

    it('should handle no inputs', () => {
        const input = void 0 as any;
        const expected = {};

        assert.deepEqual(parseYml(input), expected);
    });
});
