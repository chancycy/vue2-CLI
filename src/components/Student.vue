<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>当前求和为：{{number}}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentName">把学生名给App</button>
		<button @click="unbind">解绑lcyComponent事件</button>
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'abcd',
				sex:'男',
				number:0
			}
		},
		methods: {
      add(){
        console.log('add回调被调用了 :>> ');
        this.number++
      },
      sendStudentName(){
        // $emit('要触发的自定义组件事件',传的第一个参数,...其他参数)
        this.$emit('lcyComponent',this.name,1217,180180180)
        console.log(' :>> ', );
		this.$emit('demo')
      },
	  unbind(){
		this.$off('lcyComponent')
	  },
	  death(){
		this.$destroy()
	  }
    },
	}
</script>

<style scoped>
	.student{
		background-color: rgb(216, 215, 215);
		padding: 5px;
		margin-top: 30px;
	}
</style>
