# vue router 多级路由
子路由新增在路由下的配置项children中，
    注意:1.此时的path不需要再以``/``开头。
        2. 对应的to的路径要写全。即：``/home/news``不能简写成``/news``


# vue router 相关
路由：一组key和value的对应关系就是一个路由。
    key是路径（eg：localhost:8080.../home中的``'/home'``）
    value是组件或者函数（前端路由--组件：eg:/order对应的order.vue订单组件；
        后端路由--函数：向服务器发送请求，ajax或axios的``(res =>{...这不就是个函数嘛...})``。即：你是什么路径，就调用指定函数响应本次请求。）
   1. 安装：
    vue2:npm i vue-router@3
    vue3:npm i vue-router
    2. 应用插件Vue.use(VueRouter)
    3. 如同【12_src_Vuex-count】文件夹的readme，vueRouter的使用和Vuex的效果相似。即：
        只是这个时候router并不和store一样是我们自己定义的一个字符串（自定义router的话会报错）。
    4. 创建一个router文件夹，的index文件借助引用VueRouter来负责整个应用的路由器
       - 代码： export default new VueRouter({
                    routes: [
                        {
                            path: '/about',
                            component: About
                        },
                        {
                            path: '/home',
                            component: Home
                        }
                    ]
                })
---

- 编写router配置项
- 实现切换
    ``<router-link></router-link>``浏览器会被替换为a标签
        - router-link中的to以``/``开头
    ``active-class``可配置高亮样式
        - 配置为``active-class="active"``
- 指定展示位``<router-view></router-view>``

---
一般组件和路由组件：
  - 一般组件："Banner"这种需要引入、注册，并在模板中使用eg：``<Banner/>``
  - 路由组件：可以访问到``$route``和``$router``

- 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
- 每个组件都有自己的$route属性，里面存储着自己的路由信息
- 整个应用只有一个router，可以通过组件的$router属性获取到