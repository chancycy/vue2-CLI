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

export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: 'news',
                component: News
            }, {
                path: 'message',
                component: Message,
                children: [{
                    name: 'xijie',
                    path: 'detail',                  // query传参时
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