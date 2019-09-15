import IFrontMatter from "./IFrontMatter";

interface IBlogPost extends IFrontMatter {
    slug: string;
    uuid: string;
    created: string;
    updated: string;
    body: string;
    readingTime: string;
}

export default IBlogPost;
