# 求和案例(使用Vuex的getter)
  - 本次案例完成：对state里的数据通过getters进行加工（类似data和computed的关系）
    - 原因：有时存在一些对state处理较为复杂的加工需要被公用。--逻辑复杂还想复用的时候，推荐使用。
  - getters也是一个对象，里面的函数收到的参数为state，和vue中的计算属性很像，需要靠返回值来决定自己的值。
  - Vuex的开发者工具：第二个为切换到Vuex视图。（第三个为查看自定义组件。）
    - 收集到的是mutations的大写字母方法，证明Vuex的开发者工具是与mutations对话。
      - 因为关注的是你的数据是怎么改的。
    - 为什么actions里传的context而不是只传个我们要的commit呢？这样就可以是``commit('JIA',value)``而不用``context.commit('JIA',value)``
      - 这是因为，有时候actions里可能存在一个复杂功能用一个函数去完成不够，这时，就可以通过在函数里使用``context.dispatch('actions里的其他方法',value)``来继续完成这个复杂功能。
- 模板里可以看见vc上的所有东西，不需要this去点.
---
- 安装vuex:vue2要安装vuex3版本，命令--``npm i vuex@3``

- Vuex：专为Vue的状态管理模式。采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
  - 集中式存储：数据（状态）是集中放在一起的，共用给多个需要使用的组件。
---
