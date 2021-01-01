import { getLocale, setLocale } from '@/utils/language';

const initlocale = getLocale() || 'zh-CN';

const locale = (state = initlocale, action) => {
    switch(action.type) {
        case 'SET_LOCALE':
            console.log(action.data)
            setLocale(action.data);
            return action.data;
        default:
            return state;
    }
}

export default locale;