import IFrontMatter from '../../../../shared/Interfaces/IFrontMatter';

import parseYml from './parseYml';

interface IExtractFrontMatter {
    rawContent: string;
    frontMatter: IFrontMatter;
}

const extractFrontMatter = (markdown = ''): IExtractFrontMatter => {
    const DELIMITER = '---';
    const parsedFrontMatter = markdown.split(DELIMITER);
    const frontMatterRaw = parsedFrontMatter[1];
    const rawContent = parsedFrontMatter.slice(2).join('');

    const frontMatter = parseYml(frontMatterRaw);

    return {
        rawContent,
        frontMatter
    };
};

export default extractFrontMatter;
