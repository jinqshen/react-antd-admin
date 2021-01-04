import React, { useState } from 'react';
import { Row, Layout, Menu } from 'antd';
import { } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mySideBarCss from '@/styles/MySideBar.module.css';
import logo from '@/images/logo.png';

const { Sider } = Layout;

const { SubMenu } = Menu;



function MySideBar(props) {

    const { t } = useTranslation();

    const location = useLocation();

    const mainMenu = location.pathname.split('/')[2];
    const subMenu = location.pathname.split('/')[3];

    const collapsed = props.collapsed;

    const setCollapsed = props.setCollapsed;

    const router = useSelector(state => state.permission);

    const theme = useSelector(state => state.setting.theme);

    const [ collapsedWidth, setCollapsedWidth ] = useState(80);

    const responsive = (broken) => {
        if(broken) {
            setCollapsedWidth(0);
            setCollapsed(true);
        } else {
            setCollapsedWidth(80);
            setCollapsed(false);
        }
    }

    const router2Menu = (prefixPath, router) => {

        return (
            <>
                { router.map(route => {
                    if(!route.hidden) {
                        let prefixPathTmp = prefixPath ? prefixPath + route.path : route.path;
                        if(route.children && Array.isArray(route.children) && route.children.length > 0) {
                            if(!route.onlyOne) {
                                return (
                                    <SubMenu key={route.name}  title={<>{route.meta.icon}<span>{t(route.meta.title)}</span></>}>
                                        {
                                            router2Menu(prefixPathTmp, route.children)
                                        }
                                    </SubMenu>
                                )
                            } else {
                                const routeTmp = route.children[0];
                                return (
                                    <Menu.Item key={routeTmp.name} icon={routeTmp.meta.icon}>
                                        <Link to={prefixPathTmp + routeTmp.path}>{t(routeTmp.meta.title)}</Link>
                                    </Menu.Item>
                                )
                            }
                        } else {
                            return (
                                <Menu.Item key={route.name}>
                                    <Link to={prefixPathTmp}>{route.meta.icon}{t(route.meta.title)}</Link>
                                </Menu.Item>
                            )
                        }
                    } else {
                        return null;
                    }
                }) }
            </>
        )
    }

    return (
        <Sider breakpoint="lg" collapsedWidth={collapsedWidth} onBreakpoint={responsive} theme={theme} collapsible collapsed={collapsed} trigger={null} style={{height: '100vh'}} >
            <Row justify="center" align="middle" className={mySideBarCss['logo-wrap']}>
                <img className={[mySideBarCss['logo']].join(' ')} src={logo} alt="logo" />
            </Row>
            <Menu defaultSelectedKeys={[ subMenu ? subMenu : mainMenu ]} defaultOpenKeys={[mainMenu]} mode="inline">
                { router2Menu(undefined, router) }
            </Menu>
        </Sider>
    )
}


export default MySideBar;