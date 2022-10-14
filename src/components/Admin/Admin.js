import React, {useState} from 'react';
import SideBar from './SideBar';
import './Admin.scss'; 
import { FaBars } from "react-icons/fa";
const Admin = (props) => {
    const[collapsed, setCollapse] = useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed} ></SideBar>
            </div>
            <div className='admin-content'>
                <FaBars onClick={() => setCollapse(!collapsed)} />
                admin content
            </div>
        </div>
    );
}

export default Admin;
