<template>
    <ul class="todo-main">
        <transition-group name="animationItem" appear>
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
            />
        </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    props:['todos']
}
</script>

<style scoped>
    .todo-main{
        margin-left: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
    .animationItem-enter-active{
        animation: oneItem 0.5s linear;
    }
    .animationItem-leave-active{
        animation: oneItem 0.5s linear reverse;
    }
    @keyframes oneItem {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>