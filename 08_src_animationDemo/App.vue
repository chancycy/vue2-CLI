<template>
  <div id="root">
      <Test1/>
      <Test2/>
      
  </div>
</template>

<script>

  import Test1 from './components/Test1'
  import Test2 from './components/Test2'

  export default {
    name: "App",
    components: {Test1,Test2},
    
  };
</script>

<style>
  
</style>