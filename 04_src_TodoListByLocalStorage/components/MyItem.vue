<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <!-- 或者将@click换成 @change="handleCheck(todo.id)" -->
            <span>{{todo.title}}</span>
        </label>
        <!--- <button class="btn btn-danger" style="display:none">删除</button> -->
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo','checkTodo','deleteTodo'],
    methods: {
        //勾选或取消勾选
        handleCheck(id){
            // 通知App组件将对应todo对象的done值取反即可
            this.checkTodo(id)
        },
        // 删除
        handleDelete(id){
            // 提示是否删除
            if(confirm("确定删除吗？")){
                this.deleteTodo(id)
            }
        }
    },
}
</script>

<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top:-1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        content:initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>