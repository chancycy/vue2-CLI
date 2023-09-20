# vue的动画demo
    在优化TodoList之前，增加进入动画和出去动画
---
写法：
1. 准备好样式
    - 元素进入的样式
      - 进入的起点：`v-enter`
      - 进入的过程：`v-enter-active`
      - 进入的终点：`v-enter-to`
    - 元素离开的样式
      - 离开的起点：`v-leave` 
      - 离开的过程：`v-leave-active`
      - 离开的终点：`v-leave-to`
2. 使用`<transition>`包裹的要过渡的元素，并配置`name`属性(此时样式的 v 要换成 name)
3. 要让动画在页面一开始就有，需要添加`appear`，即`<transition name="xxx" appear>`
4. 若有多个元素需要过度，则需要使用`<transition-group>`，且每个元素都要指定`key`值
5. 一般：进入的起点`v-enter`和离开的终点`v-leave-to`共用一个样式，进入的终点`v-enter-to`、离开的起点`v-leave-to`共用一个样式

transition标签最终并没有形成真实dom