<template>
  <!--  组件的交互-->
  <div>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>
//组件交互的代码
//export default school分别暴露
export default {
  name: "Student", //开发者工具最终呈现的名字为Student
  data() {
    return {
      name: "ZhangSan",
      age: 21,
    };
  },
};
//统一暴露
// export { school };
// export default school //默认暴露
</script>