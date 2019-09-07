interface IBlogPost {
    slug: string;
    uuid: string;
    language: string;
    tags: string[];
    created: string;
    updated: string;
    readingTime: string;
    title: string;
    subTitle: string;
    description: string;
    body: string;
    coverImage: string;
}

export default IBlogPost;
