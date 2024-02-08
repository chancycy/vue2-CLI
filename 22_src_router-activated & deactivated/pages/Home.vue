<template>
  <div>
    <h3>this is Home</h3>
    <ul class="nav nav-tabs">
      <li>
        <!-- 最基本的：to这里把路径写全 -->
        <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    
    <keep-alive include="News,Message">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name:'Home',
    mounted() {
      console.log('home组件挂载完毕, this :>> ', this);
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    },
}
</script>
