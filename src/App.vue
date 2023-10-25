<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './component/Search'
import List from './component/List'
export default {
  name: "App",
  components:{Search,List}
};
</script>