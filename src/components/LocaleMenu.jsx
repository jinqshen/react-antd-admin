import React, { } from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setLocale } from '@/store/actions/locale';

function LocaleMenu() {
    
    const { i18n } = useTranslation();

    const dispatch = useDispatch();

    const locale = useSelector(state => state.locale);

    //const [ locale, setLocale ] = useState(window.localStorage.getItem('language') || 'zh-CN');

    const changeLanguage = localeRes => {
        dispatch(setLocale(localeRes));
        i18n.changeLanguage(localeRes);
        //setLocale(localeRes);
    }

    return (
        <Menu defaultSelectedKeys={[ locale ]}>
            <Menu.Item key="zh-CN" onClick={() => changeLanguage('zh-CN')}>
                中文
            </Menu.Item>
            <Menu.Item key="en-US" onClick={() => changeLanguage('en-US')}>
                EngLish
            </Menu.Item>
        </Menu>
    )
}

export default LocaleMenu;