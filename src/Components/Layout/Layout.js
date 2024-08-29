import { Outlet } from "react-router-dom";
import Footer from "../Masters/Footer";
import Header from "../Masters/Header";

import React from 'react';

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout