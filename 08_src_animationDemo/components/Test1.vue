<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear>
            <h2 v-show="isShow">this is a word:hello world!</h2>
        </transition>
    </div>
</template>

<script>
// 用动画效果实现
export default {
    name:'Test1',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h2{
        border: 2px solid;
    }
    .v-enter-active{
        animation: myName_test 0.5s linear;
    }
    .v-leave-active{
        animation: myName_test 0.5s linear reverse;
    }
    @keyframes myName_test{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>