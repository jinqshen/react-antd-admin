import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { useRoutes } from 'react-router-dom';
import { useStore, useDispatch, useSelector } from 'react-redux';
import zhCN from 'antd/lib/locale/zh_CN';
import { getUserInfo } from '@/store/actions/user';
import { generateRoutes } from '@/store/actions/permission';
import { unAuthRoutes } from '@/router';
import '@/App.less';

function App() {

  const dispatch = useDispatch();

  const store = useStore();

  const token = useSelector(state => state.user.token);

  const role = useSelector(state => state.user.roles)[0];

  useEffect(() => {
    if(role) {
      dispatch(generateRoutes([role]));
    }else {
      dispatch(getUserInfo()).then(() => {
        const role = store.getState().user.roles[0];
        dispatch(generateRoutes([role]));
      })
    }
  }, [ dispatch, role, store ]);

  const router = useSelector(state => state.permission);

  const authRoute = useRoutes(router);
  const unAuthRoute = useRoutes(unAuthRoutes);

  return (
    <ConfigProvider locale={zhCN}>
        { token ? authRoute : unAuthRoute }
    </ConfigProvider> 
  );
}

export default App;
