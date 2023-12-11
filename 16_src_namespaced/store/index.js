import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 使用vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

// 暴露store
export default new Vuex.Store({
    // 现在store上直接有的只有a和b（可以从组件里输出this查看）
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
    // actions, mutations, state, getters
})
