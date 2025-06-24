// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Expense Manager"
        links={[
          { to: '/dashboard', label: 'Dashboard' },
          { to: '/expenses',  label: 'Expenses' },
          { to: '/logout',    label: 'Logout' },
        ]}
      />

      <div className="flex flex-1">
        {/* <aside className="w-32 bg-gray-100 p-4">
          {…nav links, DO I NEED THIS currently?  }
        </aside>
        */}

        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
          {/* This is where the nested routes will render their components */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
