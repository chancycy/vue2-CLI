<template>
  <div>
    <h3>上方count组件的求和为：{{sum}}</h3>
    <h3>获取人员列表中第一个人的名字:{{ firstName }}</h3>
    <h3>当前人员列表</h3>
    <input type="text" placeholder="please input name" v-model="name">
    <button @click="add">addPersonName</button>
    <button @click="addWang">add name = Wang</button>
    <button @click="addGithub">github上一个和test相关</button>
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
  mounted() {
    console.log('this :>> ', this);
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name}
      console.log('personObj :>> ', personObj);
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      this.name = ''
    },
    addWang(){
      const wangObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonWang',wangObj)
      this.name = ''
    },
    addGithub(){
      this.$store.dispatch('personAbout/addNameToGithub')
    }
  },
  computed:{
    sum(){
      return this.$store.state.countAbout.sum
    },
    personList(){
      return this.$store.state.personAbout.personList
    },
    firstName(){
      // console.log('this.$store :>> ', this.$store);
      return this.$store.getters['personAbout/firstName']
    }
  }
}
</script>

<style>

</style>