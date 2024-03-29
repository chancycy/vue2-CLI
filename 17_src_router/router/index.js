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

export default new VueRouter({
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