# vueRouter params参数
路由接受的另一种传参：使用params参数
    - 和ajax发请求携带params参数一致。即：
      - 传：to中，直接将params参数拼在路径后(这样会使得参数像路径的层级路由)``:to="`/home/message/detail/${m.id}/${m.title}`"``
        - 所以，在路由配置里，使用占位符``:变量名``在path中明确说明。即：path由``path:'detail'``变成了``'detail/:id/:title'``
      - 另外：在取的时候通过``$route.params``能找到参数，params里的名字由占位时使用的变量名决定
      - to的对象写法：(和query传参一样，将query改为params即可)
        - eg：``:to="{name:'xijie',// path:'/home/message/detail',params:{id:m.id,title:m.title}}"``
    - 注意：**如果使用params参数，to的对象写法中，不允许使用path，必须用name**

# 命名路由
在路由的配置文件index中，和path同级，有个name属性，可以给路由取名字。
    - 作用：在跳转的时候简化一些编码（说人话：to里头的path不用写那么长了，直接path里是name的具体内容即可）
    - 注意：此时，to不能写字符串，必须写对象形式。才能认出是name
    - 举例：
      - 在to中，name代替了path``name:'xijie',// path:'/home/message/detail',``
      - 对于to直接写成路径，并没有起到简化作用。``to="/about"``变成了``:to="{name:'guanyu'}"``
    - 所以一般多级路由的时候会用到命名路由多一些。


# vue router query参数
路由接受两种参数：1.query参数
    - 和ajax发请求携带query参数基本一致。即：举例--（detail是message的路由子组件）
      - （message）传：在链接里通过``?``并且多组key、value之间用``&``分割
        1. to的字符串写法：此时to前要加``:``，并且要使用模板字符串``${abab}``。
           - 使用``:``————不然会被当做字符串，不会被识别为变量。
           - 使用模板字符串————谁家js变量是一串"/home/..."啊
           - 即：``:to="`/home/message/detail?id=${m.id}&title=${m.title}`"``
        2. to的对象写法:
           - 依然to前要加``:``，理由同上。
           - 例子：``:to="{path:'/home/message/detail',query:{id:m.id,title:m.title},}"``
      - （detail）收：在要展示的地方通过``$route.query``里就能找到传过来的query参数

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