import type { TableRowPaginated } from "../components/ResultsTable.tsx";
import { buildTableRowsPaginated, mapToTableRow } from "../utils/TableRowMapper.ts";
import { type RepositoriesSearchResponse } from "./github-sample-responses.ts";

interface NextAndPreviousLinks {
    next: string | null,
    previous: string | null
}

export class GithubApiRepository {
    private readonly searchEndpoint: string = "https://api.github.com/search/repositories";

    constructor(private readonly token: string) {}

    async search(query: string, resultsPerPage: number): Promise<TableRowPaginated> {
        const endpointUrlWithQueryAndPagination = this.searchEndpoint+`?q=${query}&per_page=${resultsPerPage}&sort=stars&order=desc`;
        console.log(`fetching data for ${query} and ${resultsPerPage} results per page`);

        var prevAndNextLinks: NextAndPreviousLinks = { next: null, previous: null };
        const result = await fetch(endpointUrlWithQueryAndPagination, {
            headers: { Authorization: `Bearer ${this.token}`}
        }).then((res) => {
            const resultJson = res.json(); 
            prevAndNextLinks = this.extractPrevAndNext(res.headers.get('link'));
            return resultJson
        }) as RepositoriesSearchResponse;

        return buildTableRowsPaginated(mapToTableRow(result.items), result.total_count > 1000 ? 1000 : result.total_count, prevAndNextLinks?.next, prevAndNextLinks?.previous);
    }

    async fetchByUrl(url: string): Promise<TableRowPaginated>{
        var prevAndNextLinks: NextAndPreviousLinks = {next: null, previous: null};
        console.log(`fetching data for url ${url}`);
        const result = await fetch(url, {
            headers: { Authorization: `Bearer ${this.token}`}
        }).then((res) => {
            const resultJson = res.json(); 
            prevAndNextLinks = this.extractPrevAndNext(res.headers.get('link'));
            return resultJson
        }) as RepositoriesSearchResponse;

        return buildTableRowsPaginated(mapToTableRow(result.items), result.total_count > 1000 ? 1000 : result.total_count, prevAndNextLinks?.next, prevAndNextLinks?.previous);
    }

    private extractPrevAndNext(linkHeader: string | null): NextAndPreviousLinks {
        if(linkHeader === null) return { next: null, previous: null }

        const prev = linkHeader.match(/(?<=<)([\S]*)(?=>; rel="prev")/g);
        const next = linkHeader.match(/(?<=<)([\S]*)(?=>; rel="next")/g);

        return {next: next === null ? next : next[0], previous: prev === null ? prev : prev[0]};
    }

    // pagination example header: '<https://api.github.com/search/repositories?q=is%3Apublic&per_page=10&sort=stars&order=desc&page=2>; rel="next", <https://api.github.com/search/repositories?q=is%3Apublic&per_page=10&sort=stars&order=desc&page=100>; rel="last"'
}