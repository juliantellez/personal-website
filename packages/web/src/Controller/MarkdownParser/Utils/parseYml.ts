import * as jsYaml from 'js-yaml'

import IFrontMatter from '../../../Interfaces/IFrontMatter'

const parseYml = (markdown: string): IFrontMatter => {
    if (typeof markdown !== 'string') {
        return {
            coverImage: '',
            title: '',
            tags: [],
            subTitle: '',
            published: false,
            language: '',
            description: '',
        }
    }

    const js = jsYaml.load(markdown)

    return js as IFrontMatter
}

export default parseYml
