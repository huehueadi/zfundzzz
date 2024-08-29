import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderSidebar from '../Masters/HaederSidebar';
import Sidebar from '../Masters/Sidebar';

function DashboardLayout() {
  return (
       <div className="d-flex">
     <HeaderSidebar />
      <Sidebar />
      
       
      <main className="flex-fill ms-3 p-5">
          <Outlet />
    </main>
          </div>
  
  );
}

export default DashboardLayout;
