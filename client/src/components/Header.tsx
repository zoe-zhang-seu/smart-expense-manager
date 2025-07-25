import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

type NavLink = {
  to: string;
  label: string;
};

type HeaderProps = {
  title?: string;
  links?: NavLink[];
};

export function Header({
  title = 'Expense Manager',
  links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/expenses', label: 'Expenses' },
    { to: '/users', label: 'Users' },
    { to: '/logout', label: 'Logout' },
  ],
}: HeaderProps) {
  const location = useLocation(); //https://api.reactrouter.com/v7/functions/react_router.useLocation.html
  const { Header: AntHeader } = Layout;

  return (
    <AntHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', background: '#fff', boxShadow: '0 2px 8px #f0f1f2' }}>
      <Link to="/" style={{ fontSize: 20, fontWeight: 'bold', color: '#1677ff' }}>
        {title}
      </Link>
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]} // e.g. /dashboard highlighted
        items={links.map((link) => ({
          key: link.to,
          label: <Link to={link.to}>{link.label}</Link>,
        }))}
        style={{ borderBottom: 'none' }}
      />
    </AntHeader>
  );
}
