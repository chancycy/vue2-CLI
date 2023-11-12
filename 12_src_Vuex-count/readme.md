# 求和案例(使用Vuex)
  - 本次案例完成：count组件可以从Vuex中读数据，以及通知Vuex改。
- 模板里可以看见vc上的所有东西，不需要this去点.
---
- 使用：
  - 组件的methods中的方法通过``this.$store.dispatch('actions的方法名',组件要传的value值-eg:this.n-)``
  - store文件夹的index里，actions中``方法名(context,value){context.commit('mutations方法名-一般是全大写',value)}``
  - mutations中``大写方法名(state,value){state.sum = ... }``
- tips：
  - **``dispatch``和actions对话，``commit``和mutations对话。**
  - 注意：如果没有进行异步操作什么的，可以绕过actions，直接操作mutations。即：在组件的methods中的方法直接调用``this.$store.commit('mutations中的大写方法名',要传的参数eg:this.n )``
---
- 安装vuex:vue2要安装vuex3版本，命令--``npm i vuex@3``

- Vuex：专为Vue的状态管理模式。采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
  - 集中式存储：数据（状态）是集中放在一起的，共用给多个需要使用的组件。
---
- 在main.js使用：
  1. 引入Vuex:``import Vuex from 'vuex'``
  2. 使用vuex插件:``Vue.use(Vuex)``
  3. 在创建vm里多了：new Vue({el:'#root', ..., ``store:'abcabc'``, ...})
理论上这个时候在vm和vc上就能看见store了，实际也可以，只是这个时候store是我们自己定义的一个字符串。
  - 在vm和vc上有了``$store:'abcabc'``
  1. 在src里创建store文件夹，目录下有index.js（放真正的Vuex的store内容）
  2. 回到main中，引入store``import store from ./store(默认找里面的index)``，将``store:'abcabc'``换成真正的``store:store``(触发简写，变成``store``)

- 对于store的index.js文件
  - 1. 引入Vuex
  - 2. 创建state、mutations、action三个对象，``const state = {}, ...``
  - 3. 创建store，store需要vuex来new (如同vm需要new Vue);但用的是``new Vuex.Store({配置对象即：actions,mutations,state})``
  - 4. 暴露store：``export default new Vuex.Store({action,mutations,state})``
---
然后出错了......
必须在创建store实例之前进行Vue.use(Vuex)
  - 因为对于main.js中的``import store from ./store``来说，store里的代码已经执行完了，然后在进行main里的``Vue.use(Vuex)``，所以会报错。（ps：在main里调整语句顺序是没有用的）
  - 解决方法：``Vue.use(Vuex)``不放在main中，放在store的index文件里。注意：放入index后，要记得在index中引入Vue。