import {Handler} from 'aws-lambda';
import lambcycle from 'lambcycle';
import * as uuid from 'uuid/v4';

import IBlogPost from '../../../shared/Interfaces/IBlogPost';

import IEventPayload from './Interfaces/IEventPayload';
import calculateReadingTime from './Utils/calculateReadingTime';
import createHumanReadableDate from './Utils/createHumanReadableDate';
import extractFrontMatter from './Utils/extractFrontMatter';
import parseMarkdown from './Utils/parseMarkdown';

const parseEvent = async (event: IEventPayload): Promise<IBlogPost> =>  {
    const {rawContent, frontMatter} = extractFrontMatter(event.data);

    const content = parseMarkdown(rawContent);
    const description = parseMarkdown(frontMatter.description);

    const date = new Date();

    return {
        ...frontMatter,

        description,
        body: content,
        readingTime: calculateReadingTime(rawContent),

        slug: event.slug || "",
        uuid: event.uuid || uuid(),
        updated: createHumanReadableDate(date),
        created: createHumanReadableDate(
            event.created ? new Date(event.created) : date
        )
    };
}

const handler: Handler<IEventPayload> = async (event): Promise<IBlogPost> => {
    return parseEvent(event)
};

const main = lambcycle(handler);

export {
    handler,
    parseEvent,
    main as default,
};
