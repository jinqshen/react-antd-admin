import { Navigate } from 'react-router-dom';
import { ReadOutlined } from '@ant-design/icons';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Article from '@/components/Article';
import DashBoard from '@/components/DashBoard';
import ArticleMgr from '@/components/ArticleMgr';
import UserMgr from '@/components/UserMgr';
import Permission from '@/components/Permission';
import NotFound from '@/components/NotFound';

/* const basicRoutes = [
    {
        path: '/',
        element: <Navigate to='/react-admin/bookstore/article' />,
        children: []
    }
] */

export const constantRoutes = [
    {
        path: '/',
        element: <Navigate to='/react-admin/bookstore/article' />
    }, {
        path: '/login',
        element: <Navigate to='/react-admin/bookstore/article' />
    }, {
        name: 'bookstore',
        path: "/react-admin",
        element: <Home />,
        children: [
            {
                name: 'article',
                path: '/bookstore/article',
                element: <Article />,
                meta: { title: '工作总结', icon: <ReadOutlined /> }
            }, {
                name: 'dashboard',
                path: '/bookstore/dashboard',
                element: <DashBoard />,
                meta: { title: '技术学习', icon: <ReadOutlined /> }
            }, {
                path: '/notfound',
                element: <NotFound />
            }
        ],
        meta: { title: '三味书屋', icon: <ReadOutlined /> }
    }, {
        name: 'permission',
        path: "/react-admin",
        element: <Home />,
        children: [
            {
                name: 'changerole',
                path: '/permission/changerole',
                element: <Permission />,
                meta: { title: '权限测试', icon: <ReadOutlined /> }
            }
        ],
        meta: { title: '权限', icon: <ReadOutlined /> }
    }, {
        path: '*',
        element: <Navigate to='/react-admin/notfound' />
    }
]

export const asyncRoutes = [
    {
        name: 'manager',
        path: "/react-admin",
        element: <Home />,
        children: [
            {
                name: 'articlemgr',
                path: '/manager/articlemgr',
                element: <ArticleMgr />,
                meta: { title: '文章管理', icon: <ReadOutlined /> }
            }, {
                name: 'usermgr',
                path: '/manager/usermgr',
                element: <UserMgr />,
                meta: { title: '用户管理', icon: <ReadOutlined /> }
            }
        ],
        meta: { title: '管理', icon: <ReadOutlined />, roles: ['admin', 'editor'] }
    }
];

export const unAuthRoutes = [
    {
        path: '/login',
        element: <Login />
    }, {
        path: '*',
        element: <Navigate to='/login' />
    }
]