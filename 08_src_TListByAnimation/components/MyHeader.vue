<template>
  <div class="todo-header">
    <input type="text" 
    placeholder="输入任务名称，按回车确认"
    @keyup.enter="addTodo"
    v-model="title"
    >
    <!-- 方法1：@keyup.enter="addTodo" -->
    <!-- 方法2：v-model="title" -->
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:"MyHeader",
    // props:['unshiftTodo'],
    // 方法2：
    data() {
        return {
            title:'',
        }
    },
    methods: {
        addTodo(){
            // 校验数据
            if(!this.title.trim()) return alert("输入不能为空")
            // 将用户的输入包装成一个对象
            const newTodoObj={
                id:nanoid(),
                title:this.title,
                done:false
            };
            // 通知App组件去添加新输入的todo数据

            // 改动1：
            this.$emit('unshiftTodo',newTodoObj)

            // this.unshiftTodo(newTodoObj)
            // 添加完后将input框的内容要清空，但这样直接操作了dom元素，所以还是使用v-model比较好
            // e.target.value=''
            this.title=''

            // 方法2：
            // console.log(this.title)
        }
    },
}
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>