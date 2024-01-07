<template>
  <div>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
            
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <router-link :to="{
                name:'xijie',
                // path:'/home/message/detail',
                query:{
                    id:m.id,
                    title:m.title,
                }
            }">
                {{ m.title }}
            </router-link>
        
        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                // 想要更真实一点可以使用axios发送请求
                {id:'001',title:'messageTitle001'},
                {id:'002',title:'messageTitle002'},
                {id:'003',title:'messageTitle003'}
            ],
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>