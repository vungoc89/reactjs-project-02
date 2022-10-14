import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';

import 'react-icons/fa';
import {FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg'; 
// import sidebarBg from './assets/bg2.jpg'; 

import {DiReact} from 'react-icons/di';
import { MdDashboard } from "react-icons/md";

import './SideBar.scss'; 

// import { useIntl } from "react-intl";


const SideBar = (props) => {
    const {image, collapsed, toggled, handleToggleSidebar} = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                {/* <Menu iconShape='square'>
                    <MenuItem icon={<FaGem></FaGem>}>Dashboard</MenuItem>
                    <SubMenu label="Charts" title='Components' icon={<FaHeart></FaHeart>}>
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                </Menu> */}

                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px', 
                            textTransform: 'uppercase', 
                            fontWeight: 'bold', 
                            fontSize: 14,
                            letterSpacing: '1px', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap', 
                    
                        }}
                    >
                      <DiReact size={'3em'} color={'00bfff'} />
                      <span>Admin Management</span>    
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='circle'>
                        <MenuItem
                            icon={<MdDashboard/>}
                            suffix={<span className='badge red'>New</span>}
                            >
                            Dashboard
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem/>}>Components</MenuItem> */}
                    </Menu>

                    <Menu iconShape='circle'>
                        <SubMenu
                            suffix={<span className='badge yellow'>3</span>}
                            
                            // icon={<FaRegLaughWink/>}
                            icon={<FaGem/>}
                            title='Features'
                        >
                            <MenuItem>Quản lý User</MenuItem>
                            <MenuItem>Quản lý Quiz</MenuItem>
                            <MenuItem>Quản lý Question</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter
                    sytle={{textAlign: 'center'}}
                >
                    <div
                        className='sidebar-btn-wrapper'
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href='https://github.com/azouaoui-med/react-pro-sidebar'
                            target='_blank'
                            className='sidebar-btn'
                            rel='noopener noreferrer'
                        >
                            {/* <FaGithub/> */}
                            <span
                                style={{whiteSpace: 'nowrap', textOverflow:'ellipsis', overflow: 'hidden'}}
                            >
                               &#169; Template Design 
                            </span>
                        </a>
                    </div>

                </SidebarFooter>
            </ProSidebar>
        </>
    );
}

export default SideBar;
