import { Link } from 'react-router-dom';

export function Header({
  title = 'My App',
  links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/expenses',  label: 'Expenses' },
    { to: '/logout',  label: 'Logout' },
  ],
}) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          {title}
        </Link>
        <nav className="space-x-6">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
