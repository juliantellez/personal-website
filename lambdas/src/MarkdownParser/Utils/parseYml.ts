import * as jsYaml from 'js-yaml';

const parseYml = (markdown: string) => {
    if (typeof markdown !== 'string') {
        return {};
    }

    return jsYaml.safeLoad(markdown);
};

export default parseYml;
