import { parseEvent } from "../../../packages/web/src/Controller/MarkdownParser/handler";
import { config } from "../config";
import { getRawContent } from "./getRawContent";

const getBlog = (id: string) => {
    return getRawContent(`${config.blogs}/${id}`)
    .then(response => {
        return parseEvent({
            data: response,
        })
    })
}

export {getBlog}
