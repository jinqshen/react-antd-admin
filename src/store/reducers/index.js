import { combineReducers } from 'redux';
import user from '@/store/reducers/modules/user';
import permission from '@/store/reducers/modules/permission';

const rootReducer = combineReducers({
    user,
    permission
});

export default rootReducer;