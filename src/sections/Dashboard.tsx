import { GithubOutlined } from '@ant-design/icons'
import { ResultsTable, type TableRow } from '../components/ResultsTable';
import { GithubApiRepository } from '../infrastructure/GithubApiRepository';
import { useEffect, useState } from 'react';

const token = import.meta.env.VITE_GITHUB_TOKEN;
const repository = new GithubApiRepository(token);

export function Dashboard() {
    const [githubApiResponse, setGithubApiResponse] = useState<TableRow[]>([]);
    useEffect(() => {
        repository.search("is:public", 10).then((response) => { setGithubApiResponse(response); });
    }, []);
    return <>
        <header className="navbar">
            <GithubOutlined style={{ fontSize: '64px', color: 'var(--accent)'}}/>
            <p className="main-title">Github Project Explorer</p>
        </header>
        <section className="results-section">
            <ResultsTable dataSource={githubApiResponse} totalCount={40}/>
        </section>
    </>;
}