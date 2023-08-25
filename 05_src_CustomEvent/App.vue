<template>
	<div class="app">
		<h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName" />

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- 方法1 -->
		<!-- <Student @lcyComponent="getStudentName" @click.native.once="show"/> -->
		<!-- <Student v-on:lcyComponent="getStudentName"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		 <Student ref="student" @demo="m1" @click.native.once="show" /> 
		<!--<Student ref="student"/>-->
	</div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
	name: 'App',
	components: { School, Student },
	data() {
		return {
			msg: '你好啊！',
			studentName: ''
		}
	},
	methods: {
		getSchoolName(name) {
			console.log('App收到了学校name :>> ', name);
		},
		// getStudentName(name, ...params) {
		// 	console.log('App收到了学生name :>> ', name, params);
		// },
		m1(){
			console.log(' Demo组件被触发了:>> ');
		},
		show(){
			alert('原生事件需要加.native')
		}
	},
	mounted() {
		this.$refs.student.$on('lcyComponent',(name,...params)=>{
			console.log('this :>> ', this);
			console.log('App收到了学生name :>> ', name, params);
			this.studentName=name
		})

		// 绑定组件（但只有一次）
		// this.$refs.student.$once('lcyComponent', this.getStudentName)
		// setTimeout(()=>{
		// 	this.$refs.student.$on('lcyComponent',this.getStudentName)
		// },5000)
	},
}
</script>

<style scoped>
.app {
	background-color: rgb(224, 221, 221);
	padding: 5px;
}
</style>
