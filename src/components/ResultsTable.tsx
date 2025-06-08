import { Table } from 'antd';
import type { ColumnsType } from "antd/es/table";
import './ResultsTable.css';
import { useState } from 'react';

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

export interface TableRowPaginated {
  rows: TableRow[],
  resultsCount: number,
  next: string | null,
  previous: string | null
}

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

export function ResultsTable({ rows }: {rows: TableRow[]}) {
  return <>
    <Table 
      dataSource={rows}
      columns={columns}
      pagination={false}
    />
  </>;
}