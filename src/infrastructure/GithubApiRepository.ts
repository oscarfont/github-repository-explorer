import type { TableRowPaginated } from "../components/ResultsTable.tsx";
import { buildTableRowsPaginated, mapToTableRow } from "../utils/TableRowMapper.ts";
import { type RepositoriesSearchResponse } from "./github-sample-responses.ts";

export class GithubApiRepository {
    private readonly searchEndpoint: string = "https://api.github.com/search/repositories";

    constructor(private readonly token: string) {}

    async search(query: string, resultsPerPage: number): Promise<TableRowPaginated> {
        const endpointUrlWithQueryAndPagination = this.searchEndpoint+`?q=${query}&per_page=${resultsPerPage}&sort=stars&order=desc`;
        console.log(`fetching data for ${query} and ${resultsPerPage} results per page`);

        const result = await fetch(endpointUrlWithQueryAndPagination, {
            headers: { Authorization: `Bearer ${this.token}`}
        }).then((res) => res.json()) as RepositoriesSearchResponse;

        return buildTableRowsPaginated(mapToTableRow(result.items), result.total_count > 1000 ? 1000 : result.total_count);
    }
}