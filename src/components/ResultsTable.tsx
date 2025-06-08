import { Table } from 'antd';
import type { ColumnsType } from "antd/es/table";
import './ResultsTable.css';

const columns: ColumnsType<TableRow> = [
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
    render: (owner) => owner.username
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Stars',
    dataIndex: 'stars',
    key: 'stars'
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks'
  },
  {
    title: 'Issues',
    dataIndex: 'issues',
    key: 'issues'
  },
  {
    title: 'Watchers',
    dataIndex: 'watchers',
    key: 'watchers'
  },
  {
    title: 'Published',
    dataIndex: 'created_at',
    key: 'published'
  }
];

export interface TableRow {
  owner: OwnerUser,
  name: string,
  repositoryUrl: string,
  description: string,
  stars: number,
  forks: number,
  issues: number,
  watchers: number,
  created_at: string
}

interface OwnerUser {
  username: string,
  avatar: string,
  url: string
}

export function ResultsTable({ dataSource, totalCount }: {dataSource: TableRow[], totalCount: number}) {
    return <>
        <Table 
          dataSource={dataSource}
          columns={columns}
          pagination={{hideOnSinglePage: true, position: ['bottomLeft']}} 
        />
        <p className="results-count">Results: {totalCount}</p>
    </>;
}