<template>
  <!--  组件的交互-->
  <div class="demo">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
//组件交互的代码
//export default school分别暴露
export default {
  name: "School", //开发者工具最终呈现的名字为School
  data() {
    return {
      name: "SZU",
      address: "sz",
      x:666
    };
  },
  
};
//统一暴露
// export { school };
// export default school //默认暴露
</script>