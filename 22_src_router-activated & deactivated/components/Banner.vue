<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <hr>
            <button @click="back">back</button>
            <button @click="forward">forward</button>
        </div>
    </div>
  
</template>

<script>
export default {
    name:'Banner',
    methods: {
        back(){
            // this.$router.back()
            this.$router.go(-1)     // 等价于上行
        },
        forward(){
            this.$router.forward()
            // this.$router.go(1)   // 等价与上行
        },
    },
}
</script>