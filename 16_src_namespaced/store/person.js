import axios from 'axios';

// 人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        // 添加姓王的人
        addPersonWang(context, value) {
            if (value.name.indexOf('wang') === 0) {
                context.commit('ADD_PERSON', value)
            }
            else {
                alert("first name must be 'wang'")
            }
        },
        // 从之前GitHub的网上上获取和test相关的用户名
        addNameToGithub(context) {
            axios.get(`https://api.github.com/search/users?q=test`).then(
                res => {
                    const arr = res.data.items
                    let len = context.state.personList.length
                    console.log('res.data.item :>> ', res.data.items);
                    console.log('res.data :>> ', arr[len].login);
                    context.commit('ADD_PERSON', { id: arr[len].id, name: arr[len].login })
                },
                err => {
                    alert('something wrong!')
                    console.log('err.message :>> ', err.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log(' person的mutations :>> addPerson ',);
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id: '001', name: 'zhangshan'
        }],
    },
    getters: {
        firstName(state) {
            return state.personList[0].name
        }
    },
}