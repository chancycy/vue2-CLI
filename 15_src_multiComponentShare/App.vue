<template>
  <div class="container">
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './component/Count.vue';
import Person from './component/Person.vue';
export default {
  name: "App",
  components:{Count,Person},
};
</script>