import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";
import Layout from './Layout';
// import { Provider } from 'react-redux';
// import App from './App';
// import User from './components/User/User';
// import Admin from './components/Admin/Admin';
// import HomePage from './components/Home/HomePage';
// import ManageUser from './components/Admin/Content/ManageUser';
// import DashBoard from './components/Admin/Content/DashBoard';
// import Login from './components/Auth/Login';

// import 'react-pro-sidebar/dist/css/styles.css';
// import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Comment React.StrictMode to prevent render twice
  // <React.StrictMode>
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
