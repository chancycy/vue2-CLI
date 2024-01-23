<template>
  <div>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由并携带query参数，to的字符串写法 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
            <!-- 跳转路由并携带query参数，to的字符串写法
            <router-link :to="{
                name:'xijie',
                // path:'/home/message/detail',
                query:{
                    id:m.id,
                    title:m.title,
                }
            }">
            </router-link> -->
            {{ m.title }}
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>

            <!-- 跳转路由并携带params参数，to的写法 -->
            <!--<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
              -->
            <!-- 跳转路由并携带params参数，to的字符串写法 -->
            <!-- 如果使用params参数，to的对象写法中，不允许使用path，必须用name
            <router-link :to="{
                name:'xijie',
                // path:'/home/message/detail',
                params:{
                    id:m.id,
                    title:m.title,
                }
            }">
                {{ m.title }}
            </router-link> -->
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
        pushShow(m){
            console.log('push--this.$router :>> ', this.$router);
            this.$router.push({
                // path:'/home/message/detail',
                name:'xijie',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m){
            console.log('replace--this.$router :>> ', this.$router);
            this.$router.replace({
                path:'/home/message/detail',
                // name:'xijie',
                query:{
                    id:m.id,title:m.title
                }
            })
        },
    },
}
</script>

<style>

</style>