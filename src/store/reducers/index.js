import { combineReducers } from 'redux';
import user from '@/store/reducers/modules/user';
import permission from '@/store/reducers/modules/permission';
import title from '@/store/reducers/modules/title';
import locale from '@/store/reducers/modules/locale';

const rootReducer = combineReducers({
    user,
    permission,
    title,
    locale
});

export default rootReducer;