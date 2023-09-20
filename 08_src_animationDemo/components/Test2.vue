<template>
  <div>
    <button @click="isShow = !isShow">appear / disappear</button>
    <transition-group name="bye" appear>
        <!-- 注意：一定要有key -->
        <h2 v-show="isShow" key="1">first: come off work</h2>
        <h2 v-show="!isShow" key="2">second: have a good holiday</h2>
        <!-- current question:when switched,'second' will move up -->
    </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test2',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h2{
        border: 1px dashed;
    }
    .bye-enter,.bye-leave-to{
        transform: translateX(-100%);
    }
    .bye-enter-active,.bye-leave-active{
        transition: 0.5s linear;
    }
    .bye-enter-to,.bye-leave{
        transform: translateX(0);
    }
</style>