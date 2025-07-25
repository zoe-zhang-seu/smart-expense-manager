import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Typography, Button, Spin, Alert } from 'antd';


interface UserType {
  id: string;
  name: string;
  email: string;
}

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { Title, Text, Paragraph } = Typography;// no need to write Typography.title


  useEffect(() => {
    setLoading(true);
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load users.json');
        return res.json();
      })
      .then((data) => {
        const found = data.find((u: UserType) => u.id === userId);
        if (!found) {
          setError(`No user found with id ${userId}`);
        } else {
          setUser(found);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spin tip={`Loading user #${userId}...`} size="large" />
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
    <Card
      title={<Title level={4}>User Details</Title>}
      extra={
        <Button onClick={() => navigate(-1)} type="default">
          ← Back
        </Button>
      }
      style={{ maxWidth: 600, margin: 'auto', marginTop: 32 }}
    >
      <Paragraph>
        <Text type="secondary">Viewing details for user #{user?.id}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>ID:</Text> {user?.id}
      </Paragraph>
      <Paragraph>
        <Text strong>Name:</Text> {user?.name}
      </Paragraph>
      <Paragraph>
        <Text strong>Email:</Text> {user?.email}
      </Paragraph>
    </Card>
  );
}
