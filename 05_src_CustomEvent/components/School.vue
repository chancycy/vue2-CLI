<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">把学校名给App</button>
	</div>
</template>

<script>
	export default {
		name:'School',
    props:['getSchoolName'],
		data() {
			return {
				name:'ccddaa',
				address:'北京',
			}
		},
		methods: {
			sendSchoolName(){
        this.getSchoolName(this.name)
      },
		},
	}
</script>

<style scoped>
	.school{
		background-color: rgb(210, 210, 210);
		padding: 5px;
	}
</style>