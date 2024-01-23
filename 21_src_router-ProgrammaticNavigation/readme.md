# vueRouter 编程式路由导航（路由的跳转方式）
案例：大标题下有‘后退’和‘前进’两个按钮，相当浏览器的前进后退。message里每一条消息后有两个按钮，‘push查看’和‘replace查看’，push查看后 后退能看到每一条记录，replace查看只能看到最后一次的记录。

  目的：避免只能用router-link的情况。router-link会被编译成a标签，但有时假如需要的是button不是a，或者存在说异步的情况（情形：点击后过三秒再加载）
  作用：不借助<router-link>实现路由跳转，让路由跳转更加灵活
    (以下方法是放在了router的原型上)
    `this.$router.push({})`	内传的对象与<router-link>中的to相同
    `this.$router.replace({})`	
    `this.$router.forward()`	前进
    `this.$router.back()`		后退
    `this.$router.go(n)`		可前进也可后退，n为正数前进n，为负数后退
  


# vueRouter 跳转路由的两种模式（push和replace）
  1. 作用：控制路由跳转时操作浏览器历史记录的模式
  2. 浏览器的历史记录有两种写入方式：push和replace
    push是追加历史记录，路由跳转时候默认为push方式
    replace是替换当前记录(即：开了replace的这条记录会在，但上一条记录不在)
  3. 开启replace模式
    - :replace="true" 或简写为 replace 
    - ``<router-link :replace="true" ...>News</router-link>``
    - 简写``<router-link replace ...>News</router-link>``
    总结：浏览记录本质是一个栈，默认push，点开新页面就会在栈顶追加一个地址，后退，栈顶指针向下移动，改为replace就是不追加，而将栈顶地址替换
    - eg：依次点击about、home、news、message(news和message开了replace)，此时点击后退，会回到about页面。

# vueRouter props
为了解决读取参数时更简洁，避免重复写如``{{$route.query.id}}``，希望简洁成``{{id}}``
- 组件的props是为了接收外部传给组件的东西
    - 传：eg：``<Student name='xxx' age=aNum></Student>`` --App.vue(父组件)
    - 收：eg：``props:['name','age']``    --Student.vue(子组件)
- 路由的props配置：谁接收东西就上哪写（所以写在router的index的detail里）
1. props的第一种写法：对象 -->
  - 传：（router的index文件）
    - 所有的key-value都会以props的形式传给detail组件
    - 用的少，原因：传递的是死数据
    - eg:``props: {a: 1217, b: 'hint',}``
  - 收：（Detail.vue文件）
    - eg:``props:['a','b'],  // 方式1``
    - ``<li>a:{{ a }}</li>
          <li>b:{{ b }}</li>``
2. props的第二种写法：布尔值 -->
  - 传：
    - 为真时，会将路由组件收到的所有params参数，以props形式传递detail组件
    - props为布尔值时，传递params参数但**无法传递query参数**
    - eg:``props: true,``
    - 注意路径的写法：``
      - path: 'detail',                  // query传参时
      - path: 'detail/:id/:title',       // params传参时``
  - 收：
    - eg:``props:['id','title'],  // 方式2：是params参数的名字``
    - ``<li>params参数通过props传递————消息编号：{{id}}</li>
        <li>消息标题:{{title}}</li>``
3. props的第三种写法：函数
  - 传：
    - 这是个回调函数，vueRouter会自动调用，并且可以得到$route
    - eg:
    - ``props($route) {
                    return {
                        id: $route.query.id,
                        title: $route.query.title,
                    }
        }``
  - 收：
    - eg:
    - ``<li>query参数通过props传递————消息编号：{{id}}</li>
        <li>消息标题:{{title}}</li>``


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