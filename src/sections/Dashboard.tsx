import { GithubOutlined } from '@ant-design/icons'
import { ResultsTable } from '../components/ResultsTable';
import { repositorySearchSampleResponse } from '../utils/github-sample-responses';
import { mapToTableRow } from '../utils/TableRowMapper';

export function Dashboard() {
    return <>
        <header className="navbar">
            <GithubOutlined style={{ fontSize: '64px', color: 'var(--accent)'}}/>
            <p className="main-title">Github Project Explorer</p>
        </header>
        <section className="results-section">
            <ResultsTable dataSource={mapToTableRow(repositorySearchSampleResponse)} totalCount={repositorySearchSampleResponse.total_count}/>
        </section>
    </>;
}