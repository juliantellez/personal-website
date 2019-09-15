import {assert} from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid/v4';

import handler from './handler';
import IEventPayload from './Interfaces/IEventPayload';

const mockContext = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: 0,
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    getRemainingTimeInMillis: () => 0,
    done: () => void 0,
    fail: () => void 0,
    succeed: () => void 0
};

const markdownPath = path.resolve(
    __dirname,
    '../../../blogs/handling-complexity-in-lambda-functions/index.md'
);
const markdown = fs.readFileSync(markdownPath, {encoding: 'utf-8'});

describe('MarkdownParser', () => {
    it('should parse md to html', () => {
        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug'
        };

        const callback = (error, data) => {
            assert.isNull(error);
            assert.exists(data);

            [
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
                'created'
            ].forEach(key => {
                assert.exists(data[key]);
            });
        };

        handler.main(event, mockContext, callback);
    });

    it('should persist uuid', done => {
        const expected = uuid();

        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug',
            uuid: expected
        };

        const callback = (_, data) => {
            const actual = data.uuid;
            assert.equal(actual, expected);
            done();
        };

        handler.main(event, mockContext, callback);
    });

    it('should persist created date', done => {
        const expected = 'Oct 8, 2019';

        const event: IEventPayload = {
            data: markdown,
            slug: 'mock-slug',
            created: expected
        };

        const callback = (_, data) => {
            const actual = data.created;

            assert.equal(actual, expected);
            done();
        };

        handler.main(event, mockContext, callback);
    });
});
