import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout, Row, Col, Tooltip, Button, Avatar, Dropdown, Menu, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretDownOutlined, GithubOutlined, TranslationOutlined } from '@ant-design/icons';
import LocaleMenu from '@/components/LocaleMenu';
import { logout } from '@/store/actions/user';
import myHeaderCss from '@/styles/MyHeader.module.css';


const { Header } = Layout;

function MyHeader(props) {

    const { t } = useTranslation();

    const collapsed = props.siderCollapsed;

    const setCollapsed = props.setSiderCollapsed;

    const userInfo = useSelector(state => state.user);

    return (
        <Header className={[myHeaderCss['bg-white']].join(' ')}>
            <Row justify="space-between">
                <Col>
                    <Button type="link" style={{marginLeft: -30, color: '#282c34'}} onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <Tooltip title={t('header.openmenu')}><MenuUnfoldOutlined /></Tooltip> : <Tooltip title={t('header.collapsemenu')}><MenuFoldOutlined /></Tooltip>}
                    </Button>
                </Col>
                <Col>
                    <Space>
                        <Dropdown overlay={<LocaleMenu />}>
                            <Button type="link" className={[myHeaderCss['avatar-btn']].join(' ')}>
                                <TranslationOutlined className={[myHeaderCss['locale']].join(' ')} />
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={<PersonMenu />} trigger={['click']}>
                            <Button type="link" className={[myHeaderCss['avatar-btn']].join(' ')}>
                                <Avatar src={userInfo.avatar} />
                                <CaretDownOutlined />
                            </Button>
                        </Dropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    )
}

function PersonMenu() {

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const navigate = useNavigate();

    const userLogout = () => {
        navigate('/');
        dispatch(logout());
    }

    return (
        <Menu>
            <Menu.Item key="0" onClick={userLogout}>
                <GithubOutlined />
                <span>{t('header.logout')}</span>
            </Menu.Item>
        </Menu>
    )
}



export default MyHeader;