export interface RepositoriesSearchResponse {
  total_count: number
  incomplete_results: boolean
  items: RepositoryResponse[]
}

export interface RepositoryResponse {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: Owner
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  created_at: string
  updated_at: string
  pushed_at: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  forks_count: number
  open_issues_count: number
  master_branch: string
  default_branch: string
  score: number
  archive_url: string
  assignees_url: string
  blobs_url: string
  branches_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  deployments_url: string
  downloads_url: string
  events_url: string
  forks_url: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  languages_url: string
  merges_url: string
  milestones_url: string
  notifications_url: string
  pulls_url: string
  releases_url: string
  ssh_url: string
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  tags_url: string
  teams_url: string
  trees_url: string
  clone_url: string
  mirror_url: string
  hooks_url: string
  svn_url: string
  forks: number
  open_issues: number
  watchers: number
  has_issues: boolean
  has_projects: boolean
  has_pages: boolean
  has_wiki: boolean
  has_downloads: boolean
  archived: boolean
  disabled: boolean
  visibility: string
  license: License
}

export interface Owner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  received_events_url: string
  type: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  site_admin: boolean
}

export interface License {
  key: string
  name: string
  url: string
  spdx_id: string
  node_id: string
  html_url: string
}

/* Sample response */
export const repositorySearchSampleResponse: RepositoriesSearchResponse = {
  "total_count": 40,
  "incomplete_results": false,
  "items": [
    {
      "id": 3081286,
      "node_id": "MDEwOlJlcG9zaXRvcnkzMDgxMjg2",
      "name": "Tetris",
      "full_name": "dtrupenn/Tetris",
      "owner": {
        "login": "dtrupenn",
        "id": 872147,
        "node_id": "MDQ6VXNlcjg3MjE0Nw==",
        "avatar_url": "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        "gravatar_id": "",
        "url": "https://api.github.com/users/dtrupenn",
        "received_events_url": "https://api.github.com/users/dtrupenn/received_events",
        "type": "User",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "site_admin": true
      },
      "private": false,
      "html_url": "https://github.com/dtrupenn/Tetris",
      "description": "A C implementation of Tetris using Pennsim through LC4",
      "fork": false,
      "url": "https://api.github.com/repos/dtrupenn/Tetris",
      "created_at": "2012-01-01T00:31:50Z",
      "updated_at": "2013-01-05T17:58:47Z",
      "pushed_at": "2012-01-01T00:37:02Z",
      "homepage": "https://github.com",
      "size": 524,
      "stargazers_count": 1,
      "watchers_count": 1,
      "language": "Assembly",
      "forks_count": 0,
      "open_issues_count": 0,
      "master_branch": "master",
      "default_branch": "master",
      "score": 1,
      "archive_url": "https://api.github.com/repos/dtrupenn/Tetris/{archive_format}{/ref}",
      "assignees_url": "https://api.github.com/repos/dtrupenn/Tetris/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/dtrupenn/Tetris/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/dtrupenn/Tetris/branches{/branch}",
      "collaborators_url": "https://api.github.com/repos/dtrupenn/Tetris/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/dtrupenn/Tetris/comments{/number}",
      "commits_url": "https://api.github.com/repos/dtrupenn/Tetris/commits{/sha}",
      "compare_url": "https://api.github.com/repos/dtrupenn/Tetris/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/dtrupenn/Tetris/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/dtrupenn/Tetris/contributors",
      "deployments_url": "https://api.github.com/repos/dtrupenn/Tetris/deployments",
      "downloads_url": "https://api.github.com/repos/dtrupenn/Tetris/downloads",
      "events_url": "https://api.github.com/repos/dtrupenn/Tetris/events",
      "forks_url": "https://api.github.com/repos/dtrupenn/Tetris/forks",
      "git_commits_url": "https://api.github.com/repos/dtrupenn/Tetris/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/dtrupenn/Tetris/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/dtrupenn/Tetris/git/tags{/sha}",
      "git_url": "git:github.com/dtrupenn/Tetris.git",
      "issue_comment_url": "https://api.github.com/repos/dtrupenn/Tetris/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/dtrupenn/Tetris/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/dtrupenn/Tetris/issues{/number}",
      "keys_url": "https://api.github.com/repos/dtrupenn/Tetris/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/dtrupenn/Tetris/labels{/name}",
      "languages_url": "https://api.github.com/repos/dtrupenn/Tetris/languages",
      "merges_url": "https://api.github.com/repos/dtrupenn/Tetris/merges",
      "milestones_url": "https://api.github.com/repos/dtrupenn/Tetris/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/dtrupenn/Tetris/notifications{?since,all,participating}",
      "pulls_url": "https://api.github.com/repos/dtrupenn/Tetris/pulls{/number}",
      "releases_url": "https://api.github.com/repos/dtrupenn/Tetris/releases{/id}",
      "ssh_url": "git@github.com:dtrupenn/Tetris.git",
      "stargazers_url": "https://api.github.com/repos/dtrupenn/Tetris/stargazers",
      "statuses_url": "https://api.github.com/repos/dtrupenn/Tetris/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/dtrupenn/Tetris/subscribers",
      "subscription_url": "https://api.github.com/repos/dtrupenn/Tetris/subscription",
      "tags_url": "https://api.github.com/repos/dtrupenn/Tetris/tags",
      "teams_url": "https://api.github.com/repos/dtrupenn/Tetris/teams",
      "trees_url": "https://api.github.com/repos/dtrupenn/Tetris/git/trees{/sha}",
      "clone_url": "https://github.com/dtrupenn/Tetris.git",
      "mirror_url": "git:git.example.com/dtrupenn/Tetris",
      "hooks_url": "https://api.github.com/repos/dtrupenn/Tetris/hooks",
      "svn_url": "https://svn.github.com/dtrupenn/Tetris",
      "forks": 1,
      "open_issues": 1,
      "watchers": 1,
      "has_issues": true,
      "has_projects": true,
      "has_pages": true,
      "has_wiki": true,
      "has_downloads": true,
      "archived": true,
      "disabled": true,
      "visibility": "private",
      "license": {
        "key": "mit",
        "name": "MIT License",
        "url": "https://api.github.com/licenses/mit",
        "spdx_id": "MIT",
        "node_id": "MDc6TGljZW5zZW1pdA==",
        "html_url": "https://api.github.com/licenses/mit"
      }
    }
  ]
};