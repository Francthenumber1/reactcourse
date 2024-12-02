import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering child routes
import Navbar from '../Component/Navbar'; // Import Navbar

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar is shared across all pages */}
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </>
  );
};

export default MainLayout;
