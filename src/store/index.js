import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex';
// 使用vuex插件
Vue.use(Vuex)

// actions--响应组件中的动作
const actions = {
    // jia(a, b) {
    // console.log('actions :>> ');
    // console.log('a =  :>> ', a);    // a是一个miniStore，上面有commit、dispatch、getter
    // console.log('b =  :>> ', b);    // b = 3，是value
    // }
    jia(context, value) {
        console.log('actions中的jia被调用了 :>> ');
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('jian--> actions :>> ',);
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('jiaOdd--> actions :>> ',);
        console.log('context :>> ', context);
        if (context.state.sum % 2) {
            // console.log('jiaOdd--> actions :>> ',);
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('jiaWait--> actions :>> ',);
        setTimeout(() => {
            context.commit('JIA', value)
        }, 800);
    }
}

// mutations--真正操作数据
const mutations = {
    // JIA(a, b) {
    //     console.log('mutations :>> ');
    //     console.log('a :>> ', a);   // 发现a里面有sum，a是state
    //     console.log('b :>> ', b);   // b = 3，是value
    // }
    JIA(state, value) {
        console.log('mutations的JIA被调用了 :>> ');
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutation--JIAN :>> ',);
        state.sum -= value
    },

}

// state--存储数据
const state = {
    sum: 0,
    school: 'aaaaa',
    subject: 'bbbbb'
}

// getters--将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 暴露store
export default new Vuex.Store({
    actions, mutations, state, getters
})
