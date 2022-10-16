import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';

// import 'react-pro-sidebar/dist/css/styles.css';
// import { ProSidebarProvider } from 'react-pro-sidebar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Comment React.StrictMode to prevent render twice
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
      </Route>

        <Route path="/admins" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path='manage-users' element={<ManageUser/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
