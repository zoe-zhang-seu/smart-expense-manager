import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

interface User{
  id: number;
  name: string;
  email: string;
};

export function UsersDashboard() {
  const [users, setUsers]     = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    fetch('/users.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load users.json');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error)   return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr
              key={u.id}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="px-4 py-2 border">
                <Link to={`/users/${u.id}`}>{u.id}</Link>
              </td>
              <td className="px-4 py-2 border">
                <Link to={`/users/${u.id}`}>{u.name}</Link>
              </td>
              <td className="px-4 py-2 border">
                <Link to={`/users/${u.id}`}>{u.email}</Link>
              </td>
              <td className="px-4 py-2 border">
                <Button>
                  <Link to={`/users/${u.id}`}>View detail</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
