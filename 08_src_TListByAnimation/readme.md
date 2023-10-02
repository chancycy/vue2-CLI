# 优化TodoList
    给TodoList的每个选项增加添加动画和移除动画
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

动画语法：
```
  未定义name时,name = v
  第（1）种：
  .name-enter-active{
    animation: name_a duration timing-function delay iteration-count direction fill-mode;
    >> eg:
    animation: demo 0.5s linear *reverse*;
  }
  .name-leave-active{...}
  @keyframes name_a{
    from{transform:translateX(...)}
    to{...}
  }
  ---
  第（2）种：
  .name-enter,.name-leave-to{
        transform: translateX(-100%);
    }
    .name-enter-active,.name-leave-active{
        transition: 0.5s linear;
    }
    .name-enter-to,.name-leave{
        transform: translateX(0);
    }
```
transition标签最终并没有形成真实dom