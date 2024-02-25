# vueRouter 路由守卫
作用：保护路由的安全。
  不是所有的路由组件都能点了就给展示（权限大小问题），得符合某些条件才能展示。（类似于过滤器）
案例：localStorage里key为name，值为lcy时才能展示news和message的内容。（正常项目里要校验的数据应该是存在vuex或从接口调用数据库的，此处只是举例啊）
  和路由器商量：当路径是home下的news和message时，请去localStorage里读取下name看看匹不匹配。--所以，写在路由index文件里。
  - 做个提前准备：给每一个路由都取好名字(name设置为拼音hhh)
  - 1. 直接用export default new VueRouter意思是创建了就直接暴露出去了，没有机会和路由器对话了，所以给这个new的router取个名字再暴露。
  - 2. 在暴露之前，和它对话（进行权限判断），加上路由守卫。
  
- 全局路由守卫
  - 使用``router.beforeEach()``这个api。
  - beforeEach是**全局前置路由守卫**API，有三个参数(to,from,next)
    - to 要去哪；from 从哪来；next() 放行。
    1. 在这里使用``to.path == '/home/news' || to.name == 'xiaoxi'``判断，但实际如果我要判断十二个是否符合，总不能将判断条件写12次吧
    2. 路由的meta叫**路由元信息**，里面可以自己进行一些配置。``this.route.meta``
       1. 本案例在需要增加校验的news和message里的meta添加了isAuth变量作为校验
  - 
  - afterEach：**全局后置路由守卫**，有2个参数(to,from)
  - 没有next 很好理解，执行之后进行鉴权，都执行了，自然不需要next
  - 弹幕（不一定正确）：实际项目中路由跳转，前置守卫可以开启一个进度条，后置守卫中可以手动关闭进度条
  - 用的不多，但也有用-例如切换显示的页签标题。
    - js做---document.title
      - -->配置在前置路由就会出问题。
        - 一上来是undefined(通过||'初始化标题')来解决，但在shua进来的那下，还是会显示工程的初始title，只能去改index.html（显然非常没必要）。
        - 此外，当无权访问news时（localStorage里的对不上了），title还是变了。解决方法：``document.title = to.meta.title || '初始界面'``写两遍，一遍在鉴权里，一遍在外圈的else里。（当然，写两遍这个解决方法很蠢）
    - 而配置在后置路由里就不需要这么麻烦，直接在afterEach里写一行就行了。
- 独享路由守卫
  - 某个路由独享的守卫
  - 需求更改：只对news这一个路由做限制，进行鉴权。
  - API：``beforeEnter``，没有afterEnter啊hhhh。可以和全局后置路由守卫一起配合使用。
- 

# vueRouter 两个生命周期函数activated和deactivated(路由组件独有)
案例：在news展示框的input行上面，有一行字，周而复始的透明度0->1变化
- 按照之前的写法，mounted里写定时器，beforeDestroy里清空定时器；但是，由于news组件通过keep-alive缓存了，所以news的定时器的内容并没有销毁。
- activated和deactivated分别对应mounted和beforeDestroy
  - activated在路由激活时被调用，deactivated在路由组件失活时触发。在本次案例里，点击切换时则实现了路由组件的激活与失活。
- 注意：这两个生命周期函数仅在组件在keep-alive中生效（很好理解，没有keep-alive的话，组件都不会被缓存，就得写在mounted和beforeDestroy里才有用）

# vueRouter 缓存路由组件
案例：在每一个news的后面都加一个输入框，使在进行路由组件的切换时(点完message后再点news)，input框的内容依然存在。
在要展示的router-view外使用``keep-alive``,include指明组件名(区分大小写)，不指明则默认所有路由组件，存在多个时include里写成数组形式(实测不写成数组也可以)。
  即：news展示在home组件里，所以是在home组件的router-view外加keep-alive，``<keep-alive include="News"> <router-view></router-view> </keep-alive>``


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