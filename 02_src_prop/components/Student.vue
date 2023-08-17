<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Student's name: {{ name }}</h2>
    <h2>Student's sex:{{ sex }}</h2>
    <h2>Student's age:{{ myAge+1 }}</h2>
    <button @click="updateAge">尝试增加年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      msg:'this is a message',
      myAge:this.age
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // props:['name','age','sex']
  props:{
    name:{
      type:String,
      required:true,
    },
    age:{
      type:String,
      default:99,
    },
    sex:{
      type:String,
      required:true
    }
  }
}
</script>