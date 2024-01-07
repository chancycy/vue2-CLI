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
}
</script>

