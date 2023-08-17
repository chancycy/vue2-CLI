<template>
  <div>
    <Student name="cycy" sex="nv" :age="20"/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
};
</script>