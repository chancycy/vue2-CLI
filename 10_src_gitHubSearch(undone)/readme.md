# gitHub用户搜索案例

关于bootstrap：在public文件夹下新建css文件夹，将bootstrap.css放入
引入方式：在index的head中通过``<link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">``

全局事件总线的使用：
1. first：在main.js中 安装全局事件总线
```
    new Vue({
        beforeCreate(){Vue.prototype.$bus = this}
    })
```
2. Search提供数据，List接收数据（想使用）
    1. 在接收数据的vue组件的mounted生命周期函数里有``this.$bus.$on('a-name',functionA{..箭头函数..})``或者``this.$bus.$on('a-name',this.函数名)``
        不想取函数名就直接用箭头函数
    2. 在提供数据的vue组件（这里是Search.vue）使用``this.$bus.$emit('a-name'【名字要一致】,要传的数据)``
    3. 在接收数据的vue组件的beforeDestroy里使用``this.$bus.$off('a-name')``销毁
