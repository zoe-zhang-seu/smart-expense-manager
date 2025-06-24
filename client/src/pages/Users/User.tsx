import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';

interface UserType {
  id: string;
  name: string;
  email: string;
};

export default function User() {
  const { userId } = useParams();
  const [user, setUser]       = useState<UserType>();
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //replace it wiht backend API call later
  useEffect(() => {
    setLoading(true);
    fetch('/users.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load users.json');
        return res.json();
      })
      .then(data => {
        const found = data.find((u: UserType) => u.id === userId);
        if (!found) {
          setError(`No user found with id ${userId}`);
        } else {
          setUser(found);
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading user #{userId}…</p>;
  if (error)   return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">User Details</h2>
      {user && (
        <>
          <p className="text-gray-700 mb-4">Viewing details for user #{user.id}</p>
          <p><strong>ID:</strong>    {user.id}</p>
          <p><strong>Name:</strong>  {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      )}

      <Button
        onClick={() => navigate(-1)}    // ← go back one entry in history
        className="mb-4 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Back
      </Button>
    </div>
  );
}
