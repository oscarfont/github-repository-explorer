import type { TableRow } from "../components/ResultsTable";
import { mapToTableRow } from "../utils/TableRowMapper";
import { repositorySearchSampleResponse } from "./github-sample-responses";

export class InMemoryGithubRepository {
    search(): TableRow[] {
        return mapToTableRow(repositorySearchSampleResponse.items);
    }
}