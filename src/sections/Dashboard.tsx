import { GithubOutlined } from '@ant-design/icons'

export function Dashboard() {
    return <>
        <header className="navbar">
            <GithubOutlined style={{ fontSize: '64px', color: 'var(--accent)'}}/>
            <p className="main-title">Github Project Explorer</p>
        </header>
        <section>
            Section
        </section>
    </>;
}