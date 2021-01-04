import { combineReducers } from 'redux';
import user from '@/store/reducers/modules/user';
import permission from '@/store/reducers/modules/permission';
import title from '@/store/reducers/modules/title';
import setting from '@/store/reducers/modules/setting';

const rootReducer = combineReducers({
    user,
    permission,
    title,
    setting
});

export default rootReducer;