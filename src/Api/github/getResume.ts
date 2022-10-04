import { parseEvent } from "../../../lambdas/src/MarkdownParser/handler";
import { config } from "../config";
import { getRawContent } from "./getRawContent";

const getResume = () => {
    return getRawContent(config.resume)
    .then(response => {
        return parseEvent({
            data: response,
        })
    })
}

export {getResume}