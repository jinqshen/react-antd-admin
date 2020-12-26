import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Tooltip, Button, Avatar, Dropdown, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretDownOutlined, GithubOutlined } from '@ant-design/icons';
import { logout } from '@/store/actions/user';
import myHeaderCss from '@/styles/MyHeader.module.css';

const { Header } = Layout;

function MyHeader(props) {

    const collapsed = props.siderCollapsed;

    const setCollapsed = props.setSiderCollapsed;

    const userInfo = useSelector(state => state.user);

    return (
        <Header className={[myHeaderCss['bg-white']].join(' ')}>
            <Row justify="space-between">
                <Col>
                    <Button type="link" style={{marginLeft: -30, color: '#282c34'}} onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <Tooltip title="展开菜单"><MenuUnfoldOutlined /></Tooltip> : <Tooltip title="收起菜单"><MenuFoldOutlined /></Tooltip>}
                    </Button>
                </Col>
                <Col>
                    <Dropdown overlay={<PersonMenu />} trigger={['click']}>
                        <Button type="link" className={[myHeaderCss['avatar-btn']].join(' ')}>
                            <Avatar src={userInfo.avatar} />
                            <CaretDownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    )
}

function PersonMenu() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userLogout = () => {
        navigate('/');
        dispatch(logout());
    }

    return (
        <Menu>
            <Menu.Item key="0" onClick={userLogout}>
                <GithubOutlined />
                <span>注销</span>
            </Menu.Item>
        </Menu>
    )
}

export default MyHeader;