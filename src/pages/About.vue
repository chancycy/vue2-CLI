<template>
  <div>
    <h3>this is About</h3>
  </div>
</template>

<script>
export default {
    name:'About',
    mounted() {
      console.log('about组件挂载完毕, this :>> ', this);
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router
    },
    //通过路由规则 进入 该组件时被调用。 
    beforeRouteEnter (to, from, next) {
      console.log('About--beforeRouteEnter :>> ', );
      console.log('to, from :>> ', to, from);
      // 鉴权
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
    },
    // 通过路由规则  离开 该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('@@About--beforeRouteLeave :>> ', );
      console.log('to, from :>> ', to, from);
      next()
    }
}
</script>

