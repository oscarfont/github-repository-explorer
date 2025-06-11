import { render, screen } from "@testing-library/react"
import { Dashboard } from '../src/sections/Dashboard.tsx';
import { GithubApiRepository } from "../src/infrastructure/GithubApiRepository.ts";
import { repositorySearchSampleResponse } from "../src/infrastructure/github-sample-responses.ts";
import { mapToTableRow, buildTableRowsPaginated } from "../src/utils/TableRowMapper.ts";

jest.mock("../src/infrastructure/GithubApiRepository.ts");

const mockRepository = GithubApiRepository as jest.Mock<GithubApiRepository>;

describe("Dashboard component tests suite", () => {
    it("should render with empty state successfully", () => {
        mockRepository.mockImplementationOnce(() => {
            return {
                search: () => Promise.resolve([]),
            } as unknown as GithubApiRepository
        });

        render(<Dashboard />);

        expect(screen.getByText("No data", { selector: 'div' })).toBeInTheDocument()
    });

    it("should render with one row of data and only one page successfully", async () => {
        mockRepository.mockImplementationOnce(() => {
            return {
                search: () => Promise.resolve(
                    buildTableRowsPaginated(mapToTableRow(repositorySearchSampleResponse.items), repositorySearchSampleResponse.total_count, null, null)
                ),
            } as unknown as GithubApiRepository
        });

        render(<Dashboard />);

        const paginationContent = await screen.findByTitle("1/4");
        const rowRepositoryName = await screen.findByText("Tetris");

        expect(paginationContent).toBeInTheDocument();
        expect(rowRepositoryName).toBeInTheDocument();
    });
});
