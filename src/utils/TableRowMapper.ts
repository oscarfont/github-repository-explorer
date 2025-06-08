import type { TableRow, TableRowPaginated } from "../components/ResultsTable";
import type { RepositoryResponse } from "../infrastructure/github-sample-responses.ts";

export function mapToTableRow(data: RepositoryResponse[]): TableRow[] {
    return data.map((res: RepositoryResponse) => {
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

export function buildTableRowsPaginated(data: TableRow[], resultsCount: number, next: string | null, previous: string | null): TableRowPaginated {
    return {
        rows: data,
        resultsCount: resultsCount,
        next: next,
        previous: previous
    }
}