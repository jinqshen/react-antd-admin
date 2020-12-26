import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login as authLogin } from '@/store/actions/user';
import loginCss from '@/styles/Login.module.css';

function Login() {

	const dispatch = useDispatch();

	const login = values => {
		console.log(values);
		dispatch(authLogin(values));
	}

	const visitorLogin = () => {
		const visitor = {
			username: 'visitor',
			password: 'visitor'
		};
		dispatch(authLogin(visitor));
	}

	return (
		<Row className={[loginCss['login-content']].join(' ')} justify="center" align="middle">
			<Col span={6}>
				<Form name="login" onFinish={login}>
					<Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
						<Input prefix={ <UserOutlined /> } placeholder="用户名" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
						<Input type="password" prefix={ <LockOutlined /> } placeholder="密码" />
					</Form.Item>
					<Form.Item>
						<Button className={[loginCss['login-btn']].join(' ')} type="primary" htmlType="submit">登录</Button>
					</Form.Item>
					<Form.Item>
						<Button className={[loginCss['login-btn']].join(' ')} type="primary" onClick={visitorLogin}>访客登录</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default Login;