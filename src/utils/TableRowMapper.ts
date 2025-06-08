import type { TableRow } from "../components/ResultsTable";
import type { RepositoriesSearchResponse, RepositoryResponse } from "../infrastructure/github-sample-responses.ts";

export function mapToTableRow(data: RepositoriesSearchResponse): TableRow[] {
    return data.items.map((res: RepositoryResponse) => {
        return {
            owner: {
                username: res.owner.login,
                avatar: res.owner.avatar_url,
                url: res.owner.url
            },
            name: res.name,
            repositoryUrl: res.url,
            description: res.description,
            stars: res.stargazers_count,
            forks: res.forks_count,
            issues: res.open_issues_count,
            watchers: res.watchers_count,
            created_at: res.created_at
        }
    });
}