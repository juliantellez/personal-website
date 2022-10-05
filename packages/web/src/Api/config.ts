const user = 'juliantellez'
const repo = 'personal-website'

const githubUserUrl = `https://api.github.com/users/${user}`
const githubRepoUrl = `https://api.github.com/repos/${user}/${repo}`
const githubRawUrl = `https://raw.githubusercontent.com/${user}/${repo}/master`

const config = {
    getUser: githubUserUrl,
    getRepo: githubRepoUrl,
    getResume: `${githubRawUrl}/packages/resume/index.md`,
    getBlog: (id: string) => `${githubRawUrl}/packages/blogs/${id}/index.md`,
    getBlogs: `${githubRepoUrl}/contents/packages/blogs`,
}

export { config }
