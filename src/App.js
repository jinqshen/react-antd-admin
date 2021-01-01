import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { useRoutes, useLocation } from 'react-router-dom';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import { useTranslation } from 'react-i18next';
import { getUserInfo } from '@/store/actions/user';
import { generateRoutes } from '@/store/actions/permission';
import { unAuthRoutes } from '@/router';
import '@/App.less';

function App() {

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const store = useStore();

  const token = useSelector(state => state.user.token);

  const role = useSelector(state => state.user.roles)[0];

  const router = useSelector(state => state.permission);

  useEffect(() => {
    if(role) {
      dispatch(generateRoutes([role]));
    }else if(token) {
      dispatch(getUserInfo()).then(() => {
        const role = store.getState().user.roles[0];
        dispatch(generateRoutes([role]));
      })
    }
  }, [ dispatch, role, store, token ]);

  const authRoute = useRoutes(router);
  const unAuthRoute = useRoutes(unAuthRoutes);

  const location = useLocation();

	const titleMap = useSelector(state => state.title);

	const [ title, setTitle ] = useState('RA-Admin');

	useEffect(() => {
		const arr =  location.pathname.split('/');
		setTitle(titleMap[arr.pop()]);
	}, [ location.pathname, title, titleMap ])

  const locale = useSelector(state => state.locale);

  return (
    <ConfigProvider locale={locale === 'en-US' ? enUS : zhCN}>
        <Helmet title={t(title)} />
        { token ? authRoute : unAuthRoute }
    </ConfigProvider> 
  );
}

export default App;
