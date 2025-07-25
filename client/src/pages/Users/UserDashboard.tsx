import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Typography, Button, Spin, Alert } from 'antd';
import Paragraph from 'antd/es/skeleton/Paragraph';

const { Title } = Typography;

interface User {
  id: number;
  name: string;
  email: string;
}

export function UsersDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load users.json');
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => <span>{id}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: User) => <span>{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text: string, record: User) => <span>{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: User) => (
        <Link to={`/users/${record.id}`}>
          <Button type="link">View detail</Button>
        </Link>
      ),
    },
  ];

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spin tip="Loading users…" size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '2rem' }}>
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Users</Title>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
