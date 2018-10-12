import Vue from 'vue';
import Vuex from "vuex";
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);

//开发环境为true，生产环境为false
const debug = process.env.Node_ENV !== 'production';

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

store.commit('increment')

console.log(store.state.count) // -> 1

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    //vuex提供的插件，现实vuex的状态修改
    plugins:debug?[createLogger()] : []
});
