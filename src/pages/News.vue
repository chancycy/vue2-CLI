<template>
  <div>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'News',
    beforeDestroy() {
      console.log('news组件 will go die :>> ', );
    },
    methods: {
      
    },
}
</script>

<style>

</style>