// 求和功能相关的配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations--value :>> ', value);
            console.log('mutations的JIA被调用了 :>> ');
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutation--JIAN :>> ',);
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'aaaaaSchoolName',
        subject: 'bbbbbSubjectName',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}