<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <!-- 或者将@click换成 @change="handleCheck(todo.id)" -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text"
                ref="inputTile"
                :value="todo.title"
                v-show="todo.isEdit"
                @blur="handleBlur(todo,$event)"
            >
        </label>
        <!--- <button class="btn btn-danger" style="display:none">删除</button> -->
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">修改</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    // 声明接收todo对象
    props:['todo'],
    methods: {
        //勾选或取消勾选
        handleCheck(id){
            // 通知App组件将对应todo对象的done值取反即可
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDelete(id){
            // 提示是否删除
            if(confirm("确定删除吗？")){
                // this.deleteTodo(id)
                this.$bus.$emit('deleteTodo',id)
            }
        },
        // 编辑
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit=true
            }
            else{
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(()=>{
                this.$refs.inputTile.focus()
            })
        },
        handleBlur(todo,e){
            todo.isEdit=false
            if(!e.target.value.trim()) return alert('input can`t null')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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