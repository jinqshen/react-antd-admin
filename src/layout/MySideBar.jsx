import React from 'react';
import { Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import mySideBarCss from '@/styles/MySideBar.module.css';

const { Sider } = Layout;

const { SubMenu } = Menu;



function MySideBar(props) {

    const location = useLocation();

    const mainMenu = location.pathname.split('/')[2];
    const subMenu = location.pathname.split('/')[3];

    const collapsed = props.collapsed;

    const router = useSelector(state => state.permission);
    return (
        <Sider theme="light" collapsible collapsed={collapsed} trigger={null} >
            <div className={[mySideBarCss['logo']].join(' ')}>
            </div>
            <Menu defaultSelectedKeys={[subMenu]} defaultOpenKeys={[mainMenu]} mode="inline">
                { router.map(route => {
                    if(route.children && Array.isArray(route.children) && route.children.length > 0)
                        return (
                            <SubMenu key={route.name} title={<>{route.meta.icon}<span>{route.meta.title}</span></>}>
                                {route.children.map(mod => {
                                    if(mod.meta)
                                        return (
                                            <Menu.Item key={mod.name}>
                                                <Link to={route.path + mod.path}>{mod.meta.icon}{mod.meta.title}</Link>
                                            </Menu.Item>
                                        )
                                    else 
                                        return null;
                                })}
                            </SubMenu>
                        )
                    else
                        return null;
                }) }
            </Menu>
        </Sider>
    )
}

export default MySideBar;