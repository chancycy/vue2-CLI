<template>
    <div>
        <!-- 模板里可以看见vc上的所有东西，不需要this -->
        <h3>当前求和为:{{ $store.state.sum }}</h3>
        <h4>当前求和结果的十倍为：{{ $store.getters.bigSum }}</h4>
        <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseOdd">sum为奇数再加</button>
        <button @click="increaseWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n: 1,
        }
    },
    mounted() {
        console.log('this.$store :>> ', this.$store);
    },
    methods: {
        increase(){
            // this.sum += this.n
            this.$store.dispatch('jia',this.n)
        },
        decrease(){
            // this.sum -= this.n
            this.$store.dispatch('jian',this.n)
        },
        increaseOdd(){
            // if(this.sum % 2)
                // this.sum += this.n

            // -----
            // 不应该将判断逻辑放在这里
            // if(this.$store.state.sum % 2)
                // this.$store.dispatch('jia',this.n)
            this.$store.dispatch('jiaOdd',this.n)
        },
        increaseWait(){
            this.$store.dispatch('jiaWait',this.n)
            // setTimeout(()=>{
                // this.$store.dispatch('jia',this.n)
                // this.sum += this.n
            // },800)
        }
    },
}
</script>

<style>
    div{
        margin: 20px 20px;   
    }
    button{
		margin-left: 5px;
	}

</style>