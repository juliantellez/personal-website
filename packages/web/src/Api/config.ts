const user = 'juliantellez'
const repo = 'personal-website'

const githubUserUrl = `https://api.github.com/users/${user}`
const githubRepoUrl = `https://api.github.com/repos/${user}/${repo}`
const githubRawUrl = `https://raw.githubusercontent.com/${user}/${repo}/master`

const getRawContent = (path: string) => `${githubRawUrl}${path}`
const getContent = (path: string) => `${githubRepoUrl}/contents${path}`
const getFileCommit = (path: string) => {
    const params = new URLSearchParams()
    params.set('path', path)
    params.set('page', '1')
    params.set('per_page', '1')
    return `${githubRepoUrl}/commits?${params.toString()}`
}

const config = {
    getUser: githubUserUrl,
    getRepo: githubRepoUrl,
    getResume: getRawContent('/packages/resume/index.md'),
    getResumeBackend: getRawContent('/packages/resume/backend.md'),
    getBlog: (id: string) => getRawContent(`/packages/blogs/${id}/index.md`),
    getBlogs: `${getContent('/packages/blogs')}`,
    getFileCommit,
}

export { config }
