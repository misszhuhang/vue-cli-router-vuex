import * as types from './mutation-types';

export const actionsSetUserInfo = function({commit,state},userInfo){
    commit(types.SET_USERINFO,userInfo);
}