import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
    }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
