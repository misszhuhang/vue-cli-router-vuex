import Vue from 'vue';
import Vuex from "vuex";
// import * as actions from './actions';
// import * as getters from './getters';
// import state from './state';
// import mutations from './mutations';
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);

//开发环境为true，生产环境为false
const debug = process.env.Node_ENV !== 'production';

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }
// })

const state = {
    collects: [1],  //初始化一个colects数组
    count: 0
};
const getters = {
    renderCollects(state) { //承载变化的collects
        return state.collects;
    }
};
const mutations = {
    pushCollects(state, items) { //如何变化collects,插入items
        state.collects.push(items)
        state.count++;
    },
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.count = 9;
    },
};
const actions = {
    invokePushItems(context, item) { //触发mutations里面的pushCollects ,传入数据形参item 对应到items
        context.commit('pushCollects', item);
    },
    showFooter(context) {  //同上注释
        alert(2)
        context.commit('show');
    },
};

// store.commit('increment')

// console.log(store.state.count) // -> 1

export default new Vuex.Store({
    namespaced: true,
    actions,
    getters,
    state,
    mutations,
    //vuex提供的插件，现实vuex的状态修改
    // plugins:debug?[createLogger()] : []
});
