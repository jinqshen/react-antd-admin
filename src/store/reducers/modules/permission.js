import { constantRoutes, asyncRoutes } from '@/router';


const initstate = asyncRoutes.concat(constantRoutes);

const permission = (state = initstate, action) => {
    switch(action.type) {
        case 'SET_ROUTES':
            return action.data.concat(constantRoutes);
        default:
            return state;
    }
}

export default permission;