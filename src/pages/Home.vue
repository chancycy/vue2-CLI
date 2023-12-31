<template>
  <div>
    <h3>this is Home</h3>
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
