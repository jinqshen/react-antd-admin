import React, { useState } from 'react';
import { Layout } from 'antd';
//import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/MyHeader';
import SideBar from '@/layout/MySideBar';
import TabsView from '@/layout/TabsView';
//import { getUserInfo } from '@/store/actions/user';
//import homeCss from '@/styles/Home.module.less';

const { Content } = Layout;

function Home() {

	const [ collapsed, setCollapsed ] = useState(false);
	
	return (
		<Layout>
			<Layout>
				<SideBar collapsed={collapsed} setCollapsed={setCollapsed}></SideBar>
				<Layout>
					<Header siderCollapsed={collapsed} setSiderCollapsed={setCollapsed} ></Header>
					<Content>
						<TabsView />
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default Home;