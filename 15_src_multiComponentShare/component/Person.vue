<template>
  <div>
    <h3>上方count组件的求和为：{{sum}}</h3>
    <h3>当前人员列表</h3>
    <input type="text" placeholder="please input name" v-model="name">
    <button @click="add">addPersonName</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name:'Person',
  data() {
    return {
      name:''
    }
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name}
      console.log('personObj :>> ', personObj);
      this.$store.commit('ADD_PERSON',personObj)
      this.name = ''
    },
  },
  computed:{
    sum(){
      return this.$store.state.sum
    },
    personList(){
      return this.$store.state.personList
    },
  // ...mapState(['personList'])
  }
}
</script>

<style>

</style>