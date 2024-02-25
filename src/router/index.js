// 该文件专门用来创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建一个路由器
// const router = new VueRouter({
//     routes: [
//         {
//             path: '/about',
//             component: About
//         },
//         {
//             path: '/home',
//             component: Home
//         }
//     ]
// })
// export default router

// 引入组件
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            meta: { title: '关于' },
            component: About
        },
        {
            name: 'zhuye',
            path: '/home',
            meta: { title: '主页' },
            component: Home,
            children: [{
                name: 'xinwen',
                path: 'news',
                meta: { isAuth: true, title: '新闻' },
                component: News,
                beforeEnter: (to, from, next) => {
                    console.log('@@@独享路由守卫 :>> ',);
                    console.log('to,from :>> ', to, from);
                    if (to.meta.isAuth) {   // 判断是否需要鉴权
                        if (localStorage.getItem('name') == 'lcy') {
                            console.log('符合，放行 :>> ',);
                            next()
                        } else {
                            alert('权限不符合要求,请检查localStorage')
                        }
                    } else {
                        next()
                    }
                }
            }, {
                name: 'xiaoxi',
                path: 'message',
                meta: { isAuth: true, title: '消息' },
                component: Message,
                children: [{
                    name: 'xijie',
                    path: 'detail',
                    meta: { title: '细节' },                // query传参时
                    // path: 'detail/:id/:title',       // params传参时
                    component: Detail,
                    // ------------------------------
                    // props的第一种写法：对象
                    // 所有的key-value都会以props的形式传给detail组件
                    // 用的少，原因：传递的是死数据
                    // props: {
                    //     a: 1217, b: 'hint',
                    // }
                    // ------------------------------
                    // props的第二种写法：布尔值
                    // 为真时，会将路由组件收到的所有params参数，以props形式传递detail组件
                    // props: true,
                    // ------------------------------
                    // props的第三种写法：函数
                    // 这是个回调函数，vueRouter会自动调用，并且可以得到$route
                    props($route) {
                        return {
                            id: $route.query.id,
                            title: $route.query.title,
                        }
                    },
                    // ----------------接收参数时进行解构赋值
                    // props({ query }) {
                    //     return { id: query.id, title: query.title }
                    // },
                    // ----------------接收参数时进行解构赋值的连续写法(不是很语义化哈)
                    // props({ query: { id, title } }) {
                    //     return { id, title }
                    // },

                }]
            }]
        }
    ]
})

/* 
// 全局前置路由守卫--每次切换路由之前被调用、以及初始化时被调用
router.beforeEach((to, from, next) => {
    console.log('@@@前置路由守卫 :>> ',);
    console.log('to,from :>> ', to, from);
    // 但其实更多的时候是：如果不符合权限要求直接都不展示news和message
    // if (to.path == '/home/news' || to.name == 'xiaoxi') {
    // 实际如果我要判断十二个是否符合，总不能将判断条件写12次吧，所以使用meta
    if (to.meta.isAuth) {   // 判断是否需要鉴权
        if (localStorage.getItem('name') == 'lcy') {
            // document.title = to.meta.title || '初始界面'
            console.log('符合，放行 :>> ',);
            next()
        } else {
            alert('权限不符合要求,请检查localStorage')
        }
    } else {
        // document.title = to.meta.title || '初始界面'
        next()
    }
})
 */

// 全局前置路由守卫--每次切换路由之‘后’被调用、以及初始化时被调用
router.afterEach((to, from) => {
    console.log('@@后置路由守卫 :>> ',);
    document.title = to.meta.title || '初始界面'
})

export default router;