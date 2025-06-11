import { GithubOutlined } from '@ant-design/icons'
import { ResultsTable, type TableRowPaginated } from '../components/ResultsTable';
import { GithubApiRepository } from '../infrastructure/GithubApiRepository';
import { useEffect, useState } from 'react';
import { Pagination, type PaginationProps } from 'antd';

export function Dashboard() {
    const token = process.env.VITE_GITHUB_TOKEN;
    const repository = new GithubApiRepository(token);

    const [githubApiResponse, setGithubApiResponse] = useState<TableRowPaginated>({ rows: [], resultsCount:0, next: null, previous: null });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [prevPage, setPrevPage] = useState<number | null>(null);

    useEffect(() => {
        fetchResults(currentPage)
    }, [prevPage, currentPage]);

    const onPageChange: PaginationProps['onChange'] = (page: number) => {
        setPrevPage(currentPage);
        setCurrentPage(page);
    };

    const fetchResults = (page: number): void => {
        if(page === 1) {
            repository.search("is:public", 10).then((response) => { setGithubApiResponse(response); });
        }else if (prevPage != null && prevPage < page && githubApiResponse.next != null){
            repository.fetchByUrl(githubApiResponse.next).then((response) => { setGithubApiResponse(response); });
        }else if (prevPage != null && prevPage > page && githubApiResponse.previous != null){
            repository.fetchByUrl(githubApiResponse.previous).then((response) => { setGithubApiResponse(response); });
        }
    }

    return <>
        <header className="navbar">
            <GithubOutlined style={{ fontSize: '64px', color: 'var(--accent)'}}/>
            <p className="main-title">Github Project Explorer</p>
        </header>
        <section className="results-section">
            <ResultsTable rows={githubApiResponse?.rows}/>
            <Pagination current={currentPage} onChange={onPageChange} total={githubApiResponse.resultsCount} showSizeChanger={false} simple={{readOnly: true}} />
        </section>
    </>;
}