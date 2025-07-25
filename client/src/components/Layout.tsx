import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header'; // Keep your custom header if needed

const { Content } = Layout;

export function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        title="Expense Manager"
        links={[
          { to: '/dashboard', label: 'Dashboard' },
          { to: '/expenses', label: 'Expenses' },
          { to: '/users', label: 'Users' },
          { to: '/logout', label: 'Logout' },
        ]}
      />

      <Layout>
        <Layout style={{ padding: '24px' }}>
          <Content style={{ background: '#fff', padding: 24, borderRadius: 8, flex: 1 }}>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}
