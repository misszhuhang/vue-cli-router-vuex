// MutationObserver.js 数据修改
import * as types from './mutation-types'
const mutations = {
    [types.SET_USERINFO](state,userInfo){
        state.userInfo = userInfo;
    }
}
export default mutations;